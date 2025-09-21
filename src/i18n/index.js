export const languages = {
  en: 'English',
  uk: 'Українська',
}

export const messages = {
  en: {
    common: {
      appTitle: 'VIN Decoder (USA databases)',
      appSubtitle: 'Enter a 17-character VIN to decode vehicle information from NHTSA.',
      inputPlaceholder: 'Enter VIN',
      search: 'Search',
      showEmpty: 'Show Empty',
    },
    groups: {
      general: 'General',
      manufacturer: 'Manufacturer',
      plant: 'Plant',
      body: 'Body',
      weights: 'Weights',
      dimensions: 'Dimensions',
      engine: 'Engine',
      safety: 'Safety',
      safetyAdvanced: 'Advanced Safety',
      motorcycle: 'Motorcycle',
      trailer: 'Trailer',
      ev: 'Electric Vehicle',
      other: 'Other',
    },
    vars: {},
  },
  uk: {
    common: {
      appTitle: 'Декодер VIN (бази США)',
      appSubtitle: 'Введіть VIN (17 символів), щоб отримати інформацію з NHTSA.',
      inputPlaceholder: 'Введіть VIN',
      search: 'Пошук',
      showEmpty: 'Показати порожні',
    },
    groups: {
      general: 'Загальне',
      manufacturer: 'Виробник',
      plant: 'Завод',
      body: 'Кузов',
      weights: 'Вагові параметри',
      dimensions: 'Габарити',
      engine: 'Двигун',
      safety: 'Безпека',
      safetyAdvanced: 'Розширена безпека',
      motorcycle: 'Мотоцикли',
      trailer: 'Причепи',
      ev: 'Електромобіль',
      other: 'Інше',
    },
    vars: {},
  },
}

export const getMessage = (lang, path, fallback = '') => {
  const parts = path.split('.')
  let cur = messages[lang]
  for (const p of parts) {
    if (cur && p in cur) cur = cur[p]
    else return fallback
  }
  return cur ?? fallback
}


