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
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { NormalizePhoneNumber } from './normalizePhoneNumber';
import { Options } from './options/Options';
import { selecterCities, selecterSources } from './options/selectOptions';

export type FormValues = {
  name: string;
  email: string;
  linkSocialMedia: string;
  companyName: string;
  recipient: string;
  phone?: number;
};

const MainPage = () => {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
const [loading, setLoading] = React.useState(0); 

  const validationSchema = yup.object().shape({
    name: yup.string().required(t('error! fill in the field')),
    email: yup.string().lowercase().required(t('error! fill in the field')).email(t('error email')),
    phone: yup.string().min(10, t('error! fill in the field')),
    linkSocialMedia: yup.string().min(3, t('error! fill in the field')),
    companyName: yup.string().required(t('error! fill in the field')),
    // cities: yup.string().trim().required(),
  });

  const {
    register,
    reset,
    formState,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

const handleClick = () => {
  setTimeout('', 3000)
}; 

  return (

    <Container>
      <InfoBlock />
      <FormContainer>
        <Form>
          <InputText
            name="name"
            label={`${t('Ваше имя*')} *`}
            placeholder={t('Иван')}
            isRequired={true}
            register={register}
            error={errors.name}
            type="text"
          />

          <InputText
            name="phone"
            label={`${t('Номер телефона')} *`}
            placeholder="+7 (000) 000-00"
            isRequired={true}
            register={register}
            error={errors.phone}
            type="tel"
            mode="numeric"
            handleChange={(event: any) => {
              const { value } = event.target;
              event.target.value = NormalizePhoneNumber(value);
            }}
          />

          <InputText
            name="email"
            label={`${t('Email')} *`}
            placeholder={t('example@skdesign.ru')}
            isRequired={true}
            register={register}
            error={errors.email}
            type="email"
          />

          <InputText
            name="linkSocialMedia"
            label={`${t('Ссылка на профиль')} *`}
            placeholder={t('instagram.com/skde…')}
            isRequired={true}
            register={register}
            error={errors.linkSocialMedia}
            type="linksSM"
          />

          {/* =================FULL INPUT BLOCK =========================*/}
          <FullInput>
            <FullInputContainer>
              <Options
                handleSelect={(event: any) => console.log(event.value)}
                name="cities"
                options={selecterCities}
                register={register}
              />

              <InputText
                name="companyName"
                label={`${t('Название организации/студии')} *`}
                placeholder={t('SK Design')}
                isRequired={true}
                register={register}
                error={errors.companyName}
                type="companyName"
              />


          {/* =================HIDDEN BLOCK =========================*/}

              <HiddenText onClick={() => setOpen(!open)}>
                <p>{open ? 'Скрыть дополнительные поля ▼ ' : 'Показать дополнительные поля ▲'}</p>
              </HiddenText>

              {open && (
                <>
                  <InputText
                    name="recipient"
                    label={`${t('Получатель')} *`}
                    placeholder={t('ФИО')}
                    isRequired={true}
                    register={register}
                    error={errors}
                    type="recipient"
                  />

                  <Options
                    handleSelect={(event: any) => console.log(event.value)}
                    name="topic"
                    options={selecterSources}
                    register={register}
                  />
                </>
              )}
            </FullInputContainer>
          </FullInput>
        </Form>

        <button onClick={handleClick} className="contact-form__submit-button" type="submit" disabled={!formState.isValid}>
          Send
        </button>
      </FormContainer>
    </Container>
  );
};

export default MainPage;
