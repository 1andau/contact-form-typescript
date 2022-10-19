import { CitiesEnum, Cities as CitiesType, SliceState } from "../HiddenBlock/selectOptions";
import { setCities } from "../../redux/slice";
import React from 'react'; 
import { useDispatch } from "react-redux";
import { FullInput, SelectButton, SelectWrapper } from "../styles";
import { Value } from "sass";

type CitiesItem = {
  name: string; 
  citiesProperty: CitiesEnum; 
}

type CitiesProps = {
  value: CitiesType; 
}

  export const cities: CitiesItem[] = [
    { name: 'Выберите город*', citiesProperty: CitiesEnum.question },
    { name: 'Москва', citiesProperty: CitiesEnum.Moskow },
    { name: 'Москва', citiesProperty: CitiesEnum.SaintPetersburg },
    { name: 'Санкт-Петербург', citiesProperty: CitiesEnum.Novosibirsk },
    { name: 'Новосибирск', citiesProperty: CitiesEnum.Kazan },
    { name: 'Казань ', citiesProperty: CitiesEnum.Krasnoyarsk },
    { name: 'Красноярск', citiesProperty: CitiesEnum.Krasnoyarsk },
  ];


const OpenSelect:React.FC <CitiesProps> = React.memo(({value}) => {
const dispatch = useDispatch(); 

const onClickCities = (obj:CitiesItem) => {
  dispatch(setCities(obj)); 
}
  
  return (
  <>

<SelectWrapper>
      <SelectButton>
{cities.map((obj, i) => (
      <option key={i}
      onClick={() => onClickCities(obj)}
      className={value.citiesProperty === obj.citiesProperty ? 'active' : ''}
      >{obj.name}</option>


))}

      </SelectButton>
    </SelectWrapper>

<p>
<label htmlFor="inputText">Название организации/студии</label>
<input
  id="company-name"
  className="form-input"
  type="text"
  placeholder="SK Design"
/></p>
  </>
  )
})

export default OpenSelect