export enum CityEnum {
  Moskow = 'Москва',
  SaintPetersburg = 'Санкт-Петербург	',
  Novosibirsk = '	Новосибирск',
  Yekaterinburg = 'Екатеринбург',
  Kazan = 'Казань',
  Krasnoyarsk = 'Красноярск',
  Ufa = 'Уфа',
  Krasnodar = 'Краснодар',
  Voronezh = 'Воронеж	',
  Perm = 'Пермь',
  Volgograd = 'Волгоград',
  other = 'другое',
}

export const CityOptions = {
  [CityEnum.Moskow]: 'Москва',
  [CityEnum.SaintPetersburg]: 'Санкт-Петербург',
  [CityEnum.Novosibirsk]: 'Новосибирск',
  [CityEnum.Kazan]: 'Екатеринбург',
  [CityEnum.Krasnoyarsk]: 'Казань',
  [CityEnum.Ufa]: 'Красноярск',
  [CityEnum.Krasnodar]: 'Уфа',
  [CityEnum.Voronezh]: 'Краснодар',
  [CityEnum.Perm]: 'Воронеж',
  [CityEnum.Volgograd]: 'Пермь',
  [CityEnum.other]: 'другое',
};

export enum SourceEnum {
  source1 = 'number №1',
  source2 = 'number №2',
  source3 = 'number №3',
  source4 = 'number №4',
  source5 = 'number №5',
}

export const SourceOptions = {
  [SourceEnum.source1]: 'number №1',
  [SourceEnum.source2]: 'number №2',
  [SourceEnum.source3]: 'number №3',
  [SourceEnum.source4]: 'number №4',
  [SourceEnum.source5]: 'number №5',
};
