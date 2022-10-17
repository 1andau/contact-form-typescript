import './style.scss';
import { Info } from './Info/Info';
import Select from './select/Select';
import { CityEnum, CityOptions, SourceEnum,SourceOptions  } from './select/selectOptions';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from 'react';

export type FormValues =   { 
  firstName: string;
  lastName: string;
  email: string;
  link: string;
  city: CityEnum | string;
  source: SourceEnum | string;
  privacyPolicy: boolean;
  newsletter: boolean;
};



const formDefaultValues = {
  firstName: "Иван",
  lastName: "",
  email: "",
  // phoneNumber: "",
  link: "",
  city: "впоыфр",
  source: "",
  privacyPolicy: false,
  newsletter: false,
};

const validationSchema = yup.object().shape({
  firstName: yup.string().trim().required(),
  email: yup
    .string()
    .trim()
    .matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm)
    .required(),
    city: yup.string().trim().required(),
    source: yup.string().trim().required(),
    privacyPolicy: yup.boolean().oneOf([true]),
});


const MainPage = () => {
  const { register, reset, formState } = useForm<FormValues>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
    defaultValues: formDefaultValues,
    
  });

//Укажите, что форма была успешно отправлена ​​без какого -либо отклонения или была вызвана обратным вызовом. PromiseErrorhandleSubmit
  useEffect(() => {
    if(formState.isSubmitSuccessful){
      reset()
    }
  }, [formState, reset])



  return (
    <main className="container">
      <div className="box">
 <Info/>


<div className="wrapper">
  <div className="formContainer">
    <form id="submit-form" action="">



      <p>
      <label htmlFor="inputText">Ваше имя *</label>
        <input id="name" className="form-input" type="text" placeholder="Иван"/>
        <small className="name-error"></small>
      </p>


      <p>
      <label htmlFor="inputText">Номер телефона *</label>
        <input id="name" className="form-input" type="text" placeholder="+7 (000) 000-00"/>
        <small className="name-error"></small>
      </p>
      
       <p>
       <label htmlFor="inputText">Email *</label>
        <input id="email" className="form-input" type="email" placeholder="example@skdesign.ru"/>
        <small className="name-error"></small>
      </p>
      
      <p>
      <label htmlFor="inputText">Ссылка на профиль*</label>
        <input id="email" className="form-input" type="email" placeholder="instagram.com/skde…"/>
        <small className="name-error"></small>
      </p>

{/* 
<div className="fullInput">
    <div className="select-wrapper">
    <select className="select">
        <option value="value1">Выберите город*</option>
        <option value="value1">Mango</option>
      </select>        
      <small></small>
    </div>
</div> */}

<Select  id={"city"} isRequired={true} register={register} options={CityOptions}>
выберите город
 </Select>


 <p className="fullInput">
         <label htmlFor="inputText">Название организации/студии</label>
        <input id="company-name" className="form-input" type="text" placeholder="SK Design" />
        <small></small>
      </p>

      <p className="fullInput">
      <label htmlFor="inputText">Получатель</label>
        <input id="name" className="form-input" type="text" placeholder="ФИО"/>
        <small className="name-error"></small>
      </p>


 <Select  id={"source"} isRequired={true} register={register} options={SourceOptions}>
Откуда узнали про нас 
</Select>

    
     
{/* <Select/> */}
      </form>

      <button className='send'>отправить форму</button>

</div>
</div>




      </div>

      
    </main>
  );
};

export default MainPage;
