export const selecterCities = [
  { label: 'Выберите город*', value: '' },
  { label: 'Москва', value: '' },
  { label: 'Санкт-Петербург', value: '' },
  { label: 'Новосибирск', value: '' },
  { label: 'Казань', value: '' },
  { label: 'Красноярск', value: '' },
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

export type UsersInfo = {
  name: string;
  email: string;
  linkSocialMedia: string;
  companyName: string;
  recipient: string;
  phone?: number;
};

export interface FilterSliceState {
  data: UsersInfo[];
}
