import React from 'react';
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

  const validationSchema = yup.object().shape({
    name: yup.string().required(('error! fill in the field')),
    email: yup.string().lowercase().required(('error! fill in the field')).email(('error email')),
    phone: yup.string().min(10, ('error! fill in the field')),
    linkSocialMedia: yup.string().min(3, ('error! fill in the field')),
    companyName: yup.string().required(('error! fill in the field')),
    cities: yup.string().trim().required(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  const onSubmit = (data: FormValues) => {
    setData(data);
    alert(JSON.stringify(data));

  };



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
 data-testid="name">
</InputText>

<InputText id={"email"} isRequired={true} register={register}
label={`${('Email')} *`}
placeholder={('example@skdesign.ru')}
error={errors.email}
data-testid="email">
</InputText> 



<InputText id={"phone"} isRequired={true} register={register}
label={`${('Номер телефона')} *`}
placeholder={('+7 (000) 000-00')}
error={errors.phone}
data-testid="phone">
</InputText> 



<InputText id={"linkSocialMedia"} isRequired={true} register={register}
label={`${('Ссылка на профиль')} *`}
placeholder={('instagram.com/skde…')}
error={errors.linkSocialMedia}
data-testid="linkSocialMedia">
</InputText> 



<FullInput>
<FullInputContainer>

<Select
  id={"cities"} isRequired={true} 
  options={selecterCities}
  register={register}
  error={errors.cities}
  data-testid="cities"/>

<InputText id={"companyName"} isRequired={true} register={register}
label={`${('Название организации/студии')} *`}
placeholder={('SK Design')}
error={errors.companyName}
data-testid="companyName">
</InputText>


 <HiddenText onClick={() => setOpen(!open)}>
   <p>{open ? 'Скрыть дополнительные поля ▼ ' : 'Показать дополнительные поля ▲'}</p>
 </HiddenText>

  {open && (
    <>
 <InputText id={"recipient"} isRequired={true} register={register}
 label={`${('Получатель')} *`}
 placeholder={('ФИО')}
 error={errors.recipient}>
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
<Button type="submit" data-testid="submit" disabled={!formState.isValid}>
Send
</Button>
</FullInput>
         </Form>
    </div>
  </ContactBox>
</Contact>





//   <Container >
//     
//     <InfoBlock/>
//     <FormContainer>
//     <Form onSubmit={handleSubmit(onSubmit)}>
// <InputText id={"name"} isRequired={true} register={register}
// label={`${('Ваше имя*')} *`}
// placeholder={('Иван')}
// error={errors.name}
// data-testid="name"
// >
// </InputText>



//  <InputText id={"email"} isRequired={true} register={register}
// label={`${('Email')} *`}
// placeholder={('example@skdesign.ru')}
// error={errors.email}
// data-testid="email"

// >
// </InputText> 


// <InputText id={"phone"} isRequired={true} register={register}
// label={`${('Номер телефона')} *`}
// placeholder={('+7 (000) 000-00')}
// error={errors.phone}
// data-testid="phone"

// >
// </InputText> 


// <InputText id={"linkSocialMedia"} isRequired={true} register={register}
// label={`${('Ссылка на профиль')} *`}
// placeholder={('instagram.com/skde…')}
// error={errors.linkSocialMedia}
// data-testid="linkSocialMedia"

// >
// </InputText> 


// <FullInput>
// <FullInputContainer>

//  <Select
//    id={"cities"} isRequired={true} 
//    options={selecterCities}
//    register={register}
//    error={errors.cities}
//    data-testid="cities"
//    />


// <InputText id={"companyName"} isRequired={true} register={register}
// label={`${('Название организации/студии')} *`}
// placeholder={('SK Design')}
// error={errors.companyName}
// data-testid="companyName"

// >
// </InputText>


//        {/* =================HIDDEN BLOCK =========================*/}

// <HiddenText onClick={() => setOpen(!open)}>
//   <p>{open ? 'Скрыть дополнительные поля ▼ ' : 'Показать дополнительные поля ▲'}</p>
// </HiddenText>

//  {open && (
//    <>
// <InputText id={"recipient"} isRequired={true} register={register}
// label={`${('Получатель')} *`}
// placeholder={('ФИО')}
// error={errors.recipient}

// >
// </InputText>

// <Select
//    id={"sources"} isRequired={true} 
//    options={selecterSources}
//    register={register}
//    error={errors.sources}
//    data-testid="sources"
// />
//    </>
//  )}
//  </FullInputContainer>
//  <button className="contact-form__submit-button" type="submit" data-testid="submit" disabled={!formState.isValid}>
//             Send
//           </button>
// </FullInput>


//           </Form>

// </FormContainer>
// </Container >

);
}

