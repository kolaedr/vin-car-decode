// Config maps NHTSA VariableId or Variable name to metadata
// Each item: { key, variableId, group, descriptions: { en, uk }, label?: { en, uk } }

export const VIN_GROUPS = {
  general: 'general',
  manufacturer: 'manufacturer',
  plant: 'plant',
  body: 'body',
  weights: 'weights',
  dimensions: 'dimensions',
  engine: 'engine',
  safety: 'safety',
  safetyAdvanced: 'safetyAdvanced',
  motorcycle: 'motorcycle',
  trailer: 'trailer',
  ev: 'ev',
  other: 'other',
}

export const VIN_VARIABLES = [
  {
    key: 'Vehicle Descriptor',
    variableId: 196,
    group: VIN_GROUPS.general,
    label: { en: 'Vehicle Descriptor', uk: 'Опис транспортного засобу' },
    descriptions: {
      en: 'VDS: positions 4-8, summarizes vehicle features (model, body, restraint, engine).',
      uk: 'VDS: позиції 4-8 VIN, узагальнює характеристики авто (модель, кузов, системи, двигун).',
    },
  },
  { key: 'Make', variableId: 26, group: VIN_GROUPS.manufacturer, label: { en: 'Make', uk: 'Марка' }, descriptions: { en: 'Manufacturer brand.', uk: 'Бренд виробника.' } },
  { key: 'Manufacturer Name', variableId: 27, group: VIN_GROUPS.manufacturer, label: { en: 'Manufacturer', uk: 'Виробник' }, descriptions: { en: 'Legal manufacturer entity.', uk: 'Юридична особа виробника.' } },
  { key: 'Model', variableId: 28, group: VIN_GROUPS.general, label: { en: 'Model', uk: 'Модель' }, descriptions: { en: 'Vehicle model.', uk: 'Модель автомобіля.' } },
  { key: 'Model Year', variableId: 29, group: VIN_GROUPS.general, label: { en: 'Model Year', uk: 'Рік випуску' }, descriptions: { en: 'Model year decoded from VIN.', uk: 'Рік моделі, визначений з VIN.' } },
  { key: 'Trim', variableId: 38, group: VIN_GROUPS.general, label: { en: 'Trim', uk: 'Комплектація' }, descriptions: { en: 'Trim level/package.', uk: 'Рівень комплектації.' } },
  { key: 'Vehicle Type', variableId: 39, group: VIN_GROUPS.general, label: { en: 'Vehicle Type', uk: 'Тип ТЗ' }, descriptions: { en: 'NHTSA vehicle category.', uk: 'Категорія транспортного засобу за NHTSA.' } },
  { key: 'Body Class', variableId: 5, group: VIN_GROUPS.body, label: { en: 'Body Class', uk: 'Тип кузова' }, descriptions: { en: 'Body style (sedan, hatchback, etc).', uk: 'Тип кузова (седан, хетчбек та ін.).' } },
  { key: 'Doors', variableId: 14, group: VIN_GROUPS.body, label: { en: 'Doors', uk: 'Кількість дверей' }, descriptions: { en: 'Number of doors.', uk: 'Кількість дверей.' } },
  { key: 'Number of Seats', variableId: 33, group: VIN_GROUPS.dimensions, label: { en: 'Seats', uk: 'Кількість місць' }, descriptions: { en: 'Total seating capacity.', uk: 'Загальна кількість посадкових місць.' } },
  { key: 'Number of Seat Rows', variableId: 61, group: VIN_GROUPS.dimensions, label: { en: 'Seat Rows', uk: 'Ряди сидінь' }, descriptions: { en: 'Number of seat rows.', uk: 'Кількість рядів сидінь.' } },
  { key: 'Plant Country', variableId: 75, group: VIN_GROUPS.plant, label: { en: 'Plant Country', uk: 'Країна заводу' }, descriptions: { en: 'Country where vehicle was assembled.', uk: 'Країна складання автомобіля.' } },
  { key: 'Plant City', variableId: 31, group: VIN_GROUPS.plant, label: { en: 'Plant City', uk: 'Місто заводу' }, descriptions: { en: 'City of assembly plant.', uk: 'Місто заводу складання.' } },
  { key: 'Engine Number of Cylinders', variableId: 9, group: VIN_GROUPS.engine, label: { en: 'Cylinders', uk: 'Кількість циліндрів' }, descriptions: { en: 'Engine cylinder count.', uk: 'Кількість циліндрів двигуна.' } },
  { key: 'Displacement (CC)', variableId: 11, group: VIN_GROUPS.engine, label: { en: 'Displacement (CC)', uk: 'Об’єм (см³)' }, descriptions: { en: 'Engine displacement in cubic centimeters.', uk: 'Робочий об’єм двигуна у см³.' } },
  { key: 'Displacement (CI)', variableId: 12, group: VIN_GROUPS.engine, label: { en: 'Displacement (CI)', uk: 'Об’єм (куб. дюйми)' }, descriptions: { en: 'Engine displacement in cubic inches.', uk: 'Робочий об’єм двигуна в кубічних дюймах.' } },
  { key: 'Displacement (L)', variableId: 13, group: VIN_GROUPS.engine, label: { en: 'Displacement (L)', uk: 'Об’єм (л)' }, descriptions: { en: 'Engine displacement in liters.', uk: 'Робочий об’єм двигуна в літрах.' } },
  { key: 'Fuel Type - Primary', variableId: 24, group: VIN_GROUPS.engine, label: { en: 'Fuel Type', uk: 'Тип палива' }, descriptions: { en: 'Primary fuel type.', uk: 'Основний тип палива.' } },
  { key: 'Engine Configuration', variableId: 64, group: VIN_GROUPS.engine, label: { en: 'Engine Configuration', uk: 'Конфігурація двигуна' }, descriptions: { en: 'Engine layout (Inline, V, etc).', uk: 'Схема двигуна (рядний, V тощо).' } },
  { key: 'Engine Brake (hp) From', variableId: 71, group: VIN_GROUPS.engine, label: { en: 'Horsepower (from)', uk: 'Потужність (від)' }, descriptions: { en: 'Minimum advertised engine power.', uk: 'Мінімальна заявлена потужність.' } },
  { key: 'Other Engine Info', variableId: 129, group: VIN_GROUPS.engine, label: { en: 'Other Engine Info', uk: 'Інша інформація про двигун' }, descriptions: { en: 'Additional engine notes.', uk: 'Додаткові примітки щодо двигуна.' } },
  { key: 'Headlamp Light Source', variableId: 178, group: VIN_GROUPS.safety, label: { en: 'Headlamp Light Source', uk: 'Джерело світла фар' }, descriptions: { en: 'Headlamp technology (LED, Halogen).', uk: 'Технологія фар (LED, галоген).' } },
  { key: 'Anti-lock Braking System (ABS)', variableId: 86, group: VIN_GROUPS.safety, label: { en: 'ABS', uk: 'ABS' }, descriptions: { en: 'Anti-lock Braking System presence.', uk: 'Наявність антиблокувальної системи гальм.' } },
  { key: 'ESC', variableId: 99, group: VIN_GROUPS.safety, label: { en: 'ESC', uk: 'ESC' }, descriptions: { en: 'Electronic Stability Control presence.', uk: 'Наявність системи курсової стійкості.' } },
  { key: 'Traction Control', variableId: 100, group: VIN_GROUPS.safety, label: { en: 'Traction Control', uk: 'Контроль тяги' }, descriptions: { en: 'Traction control presence.', uk: 'Наявність системи контролю тяги.' } },
  { key: 'Backup Camera', variableId: 104, group: VIN_GROUPS.safety, label: { en: 'Backup Camera', uk: 'Камера заднього виду' }, descriptions: { en: 'Rearview camera presence.', uk: 'Наявність камери заднього виду.' } },
  { key: 'Parking Assist', variableId: 105, group: VIN_GROUPS.safety, label: { en: 'Parking Assist', uk: 'Допомога при паркуванні' }, descriptions: { en: 'Parking assistance features.', uk: 'Функції допомоги при паркуванні.' } },
  { key: 'Front Air Bag Locations', variableId: 65, group: VIN_GROUPS.safety, label: { en: 'Front Airbags', uk: 'Передні подушки' }, descriptions: { en: 'Front airbag presence/locations.', uk: 'Наявність/розташування передніх подушок безпеки.' } },
  { key: 'Curtain Air Bag Locations', variableId: 55, group: VIN_GROUPS.safety, label: { en: 'Curtain Airbags', uk: 'Бокові шторки' }, descriptions: { en: 'Curtain airbags presence/locations.', uk: 'Наявність/розташування шторок безпеки.' } },
  { key: 'Side Air Bag Locations', variableId: 107, group: VIN_GROUPS.safety, label: { en: 'Side Airbags', uk: 'Бокові подушки' }, descriptions: { en: 'Side airbag presence/locations.', uk: 'Наявність/розташування бокових подушок безпеки.' } },
  { key: 'Seat Belt Type', variableId: 79, group: VIN_GROUPS.safety, label: { en: 'Seat Belt Type', uk: 'Тип ременів безпеки' }, descriptions: { en: 'Type of seat belt system.', uk: 'Тип системи ременів безпеки.' } },
  { key: 'Other Restraint System Info', variableId: 121, group: VIN_GROUPS.safety, label: { en: 'Other Restraint Info', uk: 'Інша інформація про ремені/утримання' }, descriptions: { en: 'Additional restraint system details.', uk: 'Додаткові деталі систем утримання.' } },
  { key: 'Tire Pressure Monitoring System (TPMS) Type', variableId: 168, group: VIN_GROUPS.safety, label: { en: 'TPMS Type', uk: 'Тип TPMS' }, descriptions: { en: 'Type of tire pressure monitoring system.', uk: 'Тип системи контролю тиску в шинах.' } },
  { key: 'Auto-Reverse System for Windows and Sunroofs', variableId: 172, group: VIN_GROUPS.safety, label: { en: 'Auto-Reverse Windows/Sunroofs', uk: 'Авто-реверс вікон/люків' }, descriptions: { en: 'Auto-reverse safety feature for windows and sunroofs.', uk: 'Функція безпеки авто-реверсу для вікон і люків.' } },
  { key: 'Keyless Ignition', variableId: 176, group: VIN_GROUPS.safety, label: { en: 'Keyless Ignition', uk: 'Безключовий запуск' }, descriptions: { en: 'Presence of keyless ignition system.', uk: 'Наявність системи безключового запуску.' } },
  { key: 'Crash Imminent Braking (CIB)', variableId: 87, group: VIN_GROUPS.safetyAdvanced, label: { en: 'CIB', uk: 'CIB' }, descriptions: { en: 'System that automatically brakes to reduce impact severity.', uk: 'Система автоматичного гальмування для зменшення сили зіткнення.' } },
  { key: 'Forward Collision Warning (FCW)', variableId: 101, group: VIN_GROUPS.safetyAdvanced, label: { en: 'FCW', uk: 'FCW' }, descriptions: { en: 'Warns the driver of potential front collision.', uk: 'Попереджає про можливе фронтальне зіткнення.' } },
  { key: 'Dynamic Brake Support (DBS)', variableId: 170, group: VIN_GROUPS.safetyAdvanced, label: { en: 'DBS', uk: 'DBS' }, descriptions: { en: 'Boosts braking to assist during emergency stops.', uk: 'Підсилює гальмування під час екстреної зупинки.' } },
  { key: 'Blind Spot Warning (BSW)', variableId: 88, group: VIN_GROUPS.safetyAdvanced, label: { en: 'BSW', uk: 'BSW' }, descriptions: { en: 'Warns of vehicles in the blind spot area.', uk: 'Попереджає про транспорт у «сліпій зоні».' } },
  { key: 'Rear Cross Traffic Alert', variableId: 183, group: VIN_GROUPS.safetyAdvanced, label: { en: 'Rear Cross Traffic Alert', uk: 'Попередження про перехресний рух ззаду' }, descriptions: { en: 'Alerts when crossing traffic is detected while reversing.', uk: 'Попереджає про перехресний рух під час руху заднім ходом.' } },
  { key: 'Rear Automatic Emergency Braking', variableId: 192, group: VIN_GROUPS.safetyAdvanced, label: { en: 'Rear AEB', uk: 'Заднє автоматичне гальмування' }, descriptions: { en: 'Automatically brakes the vehicle while reversing to avoid collision.', uk: 'Автоматично гальмує під час руху назад для уникнення зіткнення.' } },
  { key: 'Daytime Running Light (DRL)', variableId: 177, group: VIN_GROUPS.safety, label: { en: 'DRL', uk: 'ДХВ' }, descriptions: { en: 'Daytime running lights presence.', uk: 'Наявність денних ходових вогнів.' } },
  { key: 'Semiautomatic Headlamp Beam Switching', variableId: 179, group: VIN_GROUPS.safety, label: { en: 'Auto High Beam (semi)', uk: 'Напівавтоматичне перемикання фар' }, descriptions: { en: 'Semiautomatic switching between high and low beams.', uk: 'Напівавтоматичне перемикання між дальнім і ближнім світлом.' } },
  { key: 'Adaptive Driving Beam (ADB)', variableId: 180, group: VIN_GROUPS.safetyAdvanced, label: { en: 'Adaptive Driving Beam (ADB)', uk: 'Адаптивне світло фар (ADB)' }, descriptions: { en: 'Adaptive headlights that shape light to improve visibility without glare.', uk: 'Адаптивні фари, що формують світло для кращої видимості без засліплення.' } },

  // Weights
  { key: 'Gross Vehicle Weight Rating From', variableId: 25, group: VIN_GROUPS.weights, label: { en: 'GVWR From', uk: 'Повна маса від' }, descriptions: { en: 'Lower bound of Gross Vehicle Weight Rating.', uk: 'Нижня межа повної маси авто (GVWR).' } },
  { key: 'Gross Vehicle Weight Rating To', variableId: 190, group: VIN_GROUPS.weights, label: { en: 'GVWR To', uk: 'Повна маса до' }, descriptions: { en: 'Upper bound of Gross Vehicle Weight Rating.', uk: 'Верхня межа повної маси авто (GVWR).' } },

  // Trailer
  { key: 'Trailer Type Connection', variableId: 116, group: VIN_GROUPS.trailer, label: { en: 'Trailer Type Connection', uk: 'Тип з’єднання причепа' }, descriptions: { en: 'Type of trailer connection/hitch.', uk: 'Тип зчеплення/з’єднання причепа.' } },
  { key: 'Trailer Body Type', variableId: 117, group: VIN_GROUPS.trailer, label: { en: 'Trailer Body Type', uk: 'Тип кузова причепа' }, descriptions: { en: 'Trailer body style.', uk: 'Тип кузова причепа.' } },

  // Motorcycle
  { key: 'Custom Motorcycle Type', variableId: 151, group: VIN_GROUPS.motorcycle, label: { en: 'Custom Motorcycle Type', uk: 'Тип кастомного мотоцикла' }, descriptions: { en: 'Custom motorcycle classification.', uk: 'Класифікація кастомного мотоцикла.' } },
  { key: 'Motorcycle Suspension Type', variableId: 152, group: VIN_GROUPS.motorcycle, label: { en: 'Motorcycle Suspension Type', uk: 'Тип підвіски мотоцикла' }, descriptions: { en: 'Type of motorcycle suspension.', uk: 'Тип підвіски мотоцикла.' } },
  { key: 'Motorcycle Chassis Type', variableId: 153, group: VIN_GROUPS.motorcycle, label: { en: 'Motorcycle Chassis Type', uk: 'Тип рами мотоцикла' }, descriptions: { en: 'Motorcycle chassis/frame type.', uk: 'Тип рами мотоцикла.' } },

  // Bus
  { key: 'Bus Floor Configuration Type', variableId: 148, group: VIN_GROUPS.other, label: { en: 'Bus Floor Configuration Type', uk: 'Конфігурація підлоги автобуса' }, descriptions: { en: 'Bus floor configuration type.', uk: 'Тип конфігурації підлоги автобуса.' } },
  { key: 'Bus Type', variableId: 149, group: VIN_GROUPS.other, label: { en: 'Bus Type', uk: 'Тип автобуса' }, descriptions: { en: 'Bus type classification.', uk: 'Класифікація типу автобуса.' } },

  // Bed/Cab (mostly for trucks)
  { key: 'Bed Type', variableId: 3, group: VIN_GROUPS.body, label: { en: 'Bed Type', uk: 'Тип вантажної платформи' }, descriptions: { en: 'Type of truck bed.', uk: 'Тип вантажної платформи пікапа.' } },
  { key: 'Cab Type', variableId: 4, group: VIN_GROUPS.body, label: { en: 'Cab Type', uk: 'Тип кабіни' }, descriptions: { en: 'Cab type for trucks.', uk: 'Тип кабіни для пікапів/вантажівок.' } },
]

// Build fast lookup maps by VariableId and by Variable name
export const VIN_VARIABLE_BY_ID = VIN_VARIABLES.reduce((acc, item) => {
  acc[item.variableId] = item
  return acc
}, {})

export const VIN_VARIABLE_BY_KEY = VIN_VARIABLES.reduce((acc, item) => {
  acc[item.key] = item
  return acc
}, {})


