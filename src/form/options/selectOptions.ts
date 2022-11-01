export const selecterCities = [
  { label: 'Выберите город*', value: 'Выберите город*' },
  { label: 'Москва', value: '2Москва' },
  { label: 'Санкт-Петербург', value: 'Санкт-Петербург' },
  { label: 'Новосибирск', value: 'Новосибирск' },
  { label: 'Казань', value: 'Казань' },
  { label: 'Красноярск', value: 'Красноярск' },
];

export const selecterSources = [
  { label: 'Откуда узнали про нас?', value: '' },
  { label: 'Инстаграм', value: '' },
  { label: 'oт друзей', value: '' },
  { label: 'Реклама', value: '' },
  { label: 'Поисковые системы', value: '' },
  { label: 'Другое', value: '' },
];
export interface selecterCitiesProps {
  label: string;
}

export interface selecterSourcesProps {
  label: string;
}