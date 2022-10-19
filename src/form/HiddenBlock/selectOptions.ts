export enum CitiesEnum {
  question = 'Выберите город*',
  Moskow = 'Москва',
  SaintPetersburg = 'Санкт-Петербург	',
  Novosibirsk = '	Новосибирск',
  Kazan = 'Казань',
  Krasnoyarsk = 'Красноярск',
}

export type Cities = {
 name: string;
 citiesProperty: CitiesEnum; 
};

export interface SliceState {
cities: Cities; 
sourses: Sourses; 
}


export enum SourcesEnum {
  question = 'Откуда узнали про нас?',
  Instagram = 'Инстаграм',
  Friends = 'От друзей',
  Advertising = '	Реклама',
  SearchEngines = 'Поисковые',
  Other = 'Другое',
}
export type Sourses = {
  name: string; 
soursesProperty: SourcesEnum;
}



