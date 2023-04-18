<script setup>
import { computed, ref } from "vue";
import API from "../service/api";

const vin = ref(null);
const carInfo = ref(null);

const getVinData = async () => {
  try {
    const { data } = await API.get(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin.value}?format=json`);
    carInfo.value = data;
    vin.value = null;
  } catch (error) {}
};

const expect = ['Error Code', 'Error Text']
const showEmpty = ref(false);
const result = computed(() => {
  const arr = Array.isArray(carInfo.value?.Results) ? carInfo.value.Results : [];
  return arr.filter(el => !expect.includes(el.Variable)).filter((el) => (!showEmpty.value ? !!el.Value : true));
});
</script>

<template>
  <div class="container mx-auto px-4 md:px-0">
    <div class="flex justify-center py-6 border-b">
      <form class="flex items-center gap-4" @submit.prevent="getVinData()">
        <div class="flex flex-col gap-2">
          <!-- <label for="vin">Fin Code</label> -->
          <input
            type="text"
            name="vin"
            id="vin"
            v-model="vin"
            placeholder="VIN code"
            class="border px-4 py-2 rounded-lg"
          />
        </div>
        <button class="px-4 py-2 rounded-lg bg-indigo-800 text-white font-bold">Check</button>
      </form>
    </div>
    <div class="mt-4">
      <div
        v-if="carInfo?.Message"
        class="bg-sky-100 border-sky-600 text-sky-600 text-center font-bold py-3 px-4 rounded-xl mb-6 text-xs"
      >
        {{ carInfo?.Message }}
      </div>
      <div v-if="carInfo?.SearchCriteria" class="flex justify-between mb-6 py-2 px-4 rounded border">
        <h3 class="text-xl font-bold text-indigo-800">{{ carInfo?.SearchCriteria }}</h3>
        <div class="flex gap-2 items-center">
          <input type="checkbox" name="showEmpty" id="showEmpty" v-model="showEmpty" />
          <label for="showEmpty">Show Empty</label>
        </div>
      </div>

      <!-- <pre>{{ carInfo }}</pre> -->
      <div class="grid grid-cols-1">
        <div
          v-for="(field, $index) in result"
          :key="field.VariableId"
          class="grid grid-cols-1 md:grid-cols-3 py-2 px-2"
          :class="$index % 2 == 0 && 'bg-indigo-50 rounded'"
        >
          <div class="">
            {{ field.Variable }}
          </div>
          <div class="col-span-1 md:col-span-2 font-semibold">
            {{ field.Value }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
