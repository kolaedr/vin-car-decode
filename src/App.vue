<script setup>
import VinForm from "./components/VinForm.vue";
import TheHeader from './layouts/TheHeader.vue';
</script>

<template>
  <div class="flex flex-col h-screen   w-full">
    <TheHeader />
    <main class="flex-1">
      <VinForm />
    </main>
  </div>
</template>

<style scoped></style>
