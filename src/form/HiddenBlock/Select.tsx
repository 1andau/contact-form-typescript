import React from 'react'
import {SourcesEnum, Sourses as SoursesType } from './selectOptions';
import { SelectWrapper, SelectButton, FullInput, HiddenText } from '../styles';
import { useDispatch } from 'react-redux';
import { setSourses } from '../../redux/slice';

type SoursesItem = {
  name: string;
  soursesProperty: SourcesEnum;
};

type SourcesPopupProps = {
  value: SoursesType;
};


export const sources: SoursesItem[] = [
    { name: 'Откуда узнали про нас?', soursesProperty: SourcesEnum.question },
    { name: 'Инстаграм', soursesProperty: SourcesEnum.Instagram },
    { name: 'От друзей', soursesProperty: SourcesEnum.Friends },
    { name: 'Реклама', soursesProperty: SourcesEnum.Advertising },
    { name: 'Поисковые системы', soursesProperty: SourcesEnum.SearchEngines },
    { name: 'Другое', soursesProperty: SourcesEnum.Other },
  ];

export const Select:React.FC<SourcesPopupProps> = React.memo(({value}) => {
  const [open, setOpen] = React.useState(false);
const dispatch = useDispatch();

  const onClickListItem = (obj: SoursesItem) => {
    dispatch(setSourses(obj));
    setOpen(false);
  };

  console.log(onClickListItem);
  
return (
  <>
<HiddenText onClick={() => setOpen(!open)}> <p>{open ? "Скрыть дополнительные поля ▼ " : "Показать дополнительные поля ▲"}</p></HiddenText>
{open && (
<>
  <p>
    <label htmlFor="inputText">Получатель</label>
      <input id="name" className="form-input" type="text" placeholder="ФИО"/>
      <small className="name-error"></small>
    </p>
    <SelectWrapper>
  <SelectButton>
{
  sources.map((obj, i) => (
  <option  
  key={i} 
  onClick={() => onClickListItem(obj)}
  className={value.soursesProperty === obj.soursesProperty ? 'active' : ''}
>
  {obj.name}
</option>
  ))
}

</SelectButton>        
</SelectWrapper>
</>

 
)}

</>
)

})

