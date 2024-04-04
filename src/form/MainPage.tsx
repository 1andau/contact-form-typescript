import React, { useState } from 'react';
import { InfoBlock } from './Info/InfoBlock';
import { InputText } from './Inputs/InputText';
import {
  HiddenText, Form, ContactBox, Contact, Button, FullInput, FullInputContainer
} from './styles';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Select } from './options/Select';
import {selecterCitiesProps, selecterSourcesProps, selecterCities, selecterSources } from './options/selectOptions';
import { setData } from '../redux/db/InputSlice';
import { useForm } from "react-hook-form";

export interface FormValues {
  name: string;
  email: string;
  linkSocialMedia: string;
  companyName: string;
  phone?: number;
  recipient: string; 
  cities: selecterCitiesProps | string; 
  sources: selecterSourcesProps | string; 
};

export const MainPage = () => {
  const [open, setOpen] = React.useState(false);

  const [emailState, setEmailState] = useState({})

  const validationSchema = yup.object().shape({

    name: yup.string().required("Только буквы")
   .matches(/^[aA-zZ\s]+$/, "Используйте буквы"),
    email: yup.string().lowercase().required(('Заполните обязательное поле Email')).email(('Неккорректный Email')),
    phone: yup.string().min(10, ('Заполните обязательное поле номер телефона')),
    linkSocialMedia: yup.string().min(3, ('Заполните обязательное поле ссылка на профиль')),
    companyName: yup.string().required(('Заполните поле наименование компании')),
    cities: yup.string().trim().required(),
  });


  const { register, handleSubmit, reset, formState, setValue, formState: { errors } } 
  = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  const [formValues, setFormValues] = React.useState<FormValues>({
    email: "",
    name:"",
    phone: 0, 
    linkSocialMedia:"", 
    cities:"", 
    sources:"", 
    companyName: "", 
    recipient:""
  });




  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  const onSubmit = (data: FormValues) => {
    setFormValues(data)
    
    alert(JSON.stringify(data));
  };
  

  const onChangeEmail = (data: FormValues) => {
    setEmailState(data.email)
    console.log(data.email, "EMAIL ");

  };




  const changeFormValue = (fieldName: string, value: any) => {

    setFormValues((prev) => ({
      ...prev,
      [fieldName]: value

    }));
    // console.log(value)

  }

return (

<Contact>
  <ContactBox>
<InfoBlock/>

<div className="contact-form-wrapper">
<Form onSubmit={handleSubmit(onSubmit)}>

 <InputText id={"name"} isRequired={true} register={register}
 label={`${('Ваше имя*')} *`}
 placeholder={('Иван')}
 error={errors.name}
 value = {formValues.name}
 onChange={(e) => {
  changeFormValue("name", e.target.value);
}} 
data-testid="name">

</InputText>


<InputText
 id={"email"} 
isRequired={true}
 register={register}
      label={`${('Email')} *`}
      placeholder={('example@skdesign.ru')}
      error={errors.email}
      value={formValues.email}
      onChange={(e) => {
        changeFormValue("email", e.target.value);
      }}

 data-testid="email">
</InputText>


 <InputText id={"phone"} isRequired={true} register={register}
label={`${('Номер телефона')} *`}
placeholder={('+7 (000) 000-00')}
error={errors.phone}
value = {formValues.phone}
onChange={(e) => {
  changeFormValue("phone", e.target.value);
}}
data-testid="phone">
</InputText> 



<InputText id={"linkSocialMedia"} isRequired={true} register={register}
label={`${('Ссылка на профиль')} *`}
placeholder={('instagram.com/skde…')}
error={errors.linkSocialMedia}
value = {formValues.linkSocialMedia}
onChange={(e) => {
  changeFormValue("linkSocialMedia", e.target.value);
}}
data-testid="linkSocialMedia">
</InputText> 


<FullInput>
<FullInputContainer>

<Select
  id={"cities"}
  isRequired={true} 
  options={selecterCities}
  register={register}
  error={errors.cities}
  data-testid="cities"/>

<InputText id={"companyName"} isRequired={true} register={register}
label={`${('Название организации/студии')} *`}
placeholder={('SK Design')}
error={errors.companyName}
value={formValues.companyName}
onChange={(e) => {
  changeFormValue("companyName", e.target.value);
}}
data-testid="companyName">
</InputText>


 <HiddenText onClick={() => setOpen(!open)}>
   <p>{open ? 'Скрыть дополнительные поля ▼ ' : 'Показать дополнительные поля ▲'}</p>
 </HiddenText>

  {open && (
    <>
 <InputText id={"recipient"}
  isRequired={true} 
  register={register}
 label={`${('Получатель')} *`}
 placeholder={('ФИО')}
 value = {formValues.recipient}
 onChange={(e) => {
  changeFormValue("recipient", e.target.value);
}} error={errors.recipient}
 
 >
 </InputText>

 <Select
    id={"sources"} isRequired={true} 
    options={selecterSources}
    register={register}
    error={errors.sources}
    data-testid="sources"/>
    </>
  )}

</FullInputContainer>
<Button type="submit" data-testid="submit">
Send
</Button>
</FullInput>
         </Form>
    </div>
  </ContactBox>
</Contact>
);
}

