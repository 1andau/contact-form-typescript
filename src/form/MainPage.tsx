import React from 'react';
import { InfoBlock } from './Info/InfoBlock';
import { InputText } from './Inputs/InputText';
import {
  Container,
  FormContainer,
  Form,
  FullInput,
  FullInputContainer,
  HiddenText,
} from './styles';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);

  const validationSchema = yup.object().shape({
    name: yup.string().required(t('error! fill in the field')),
    email: yup.string().lowercase().required(t('error! fill in the field')).email(t('error email')),
    phone: yup.string().min(10, t('error! fill in the field')),
    linkSocialMedia: yup.string().min(3, t('error! fill in the field')),
    companyName: yup.string().required(t('error! fill in the field')),
    cities: yup.string().trim().required(),
  });

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  const watchFields = watch(["name", "email"]); // you can also target specific fields by their names
console.log(watchFields);

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

  <Container >
    <InfoBlock/>
    <FormContainer>
    <Form onSubmit={handleSubmit(onSubmit)}>

<InputText id={"name"} isRequired={true} register={register}
label={`${t('Ваше имя*')} *`}
placeholder={t('Иван')}
error={errors.name}>
</InputText>


<InputText id={"email"} isRequired={true} register={register}
label={`${t('Email')} *`}
placeholder={t('example@skdesign.ru')}
error={errors.email}>
</InputText>


<InputText id={"phone"} isRequired={true} register={register}
label={`${t('Номер телефона')} *`}
placeholder={t('+7 (000) 000-00')}
error={errors.phone}>
</InputText>


<InputText id={"linkSocialMedia"} isRequired={true} register={register}
label={`${t('Ссылка на профиль')} *`}
placeholder={t('instagram.com/skde…')}
error={errors.linkSocialMedia}>
</InputText>


<FullInput>
<FullInputContainer>

 <Select
   id={"cities"} isRequired={true} 
   options={selecterCities}
   register={register}
   error={errors.cities}
   />


<InputText id={"companyName"} isRequired={true} register={register}
label={`${t('Название организации/студии')} *`}
placeholder={t('SK Design')}
error={errors.companyName}>
</InputText>


       {/* =================HIDDEN BLOCK =========================*/}

<HiddenText onClick={() => setOpen(!open)}>
  <p>{open ? 'Скрыть дополнительные поля ▼ ' : 'Показать дополнительные поля ▲'}</p>
</HiddenText>

 {open && (
   <>
<InputText id={"recipient"} isRequired={true} register={register}
label={`${t('Получатель')} *`}
placeholder={t('ФИО')}
error={errors.recipient}>
</InputText>

<Select
   id={"sources"} isRequired={true} 
   options={selecterSources}
   register={register}
   error={errors.sources}
   />
   </>
 )}

 </FullInputContainer>
</FullInput>
<button className="contact-form__submit-button" type="submit" disabled={!formState.isValid}>
            Send
          </button>

          </Form>

</FormContainer>
</Container >

);
}

