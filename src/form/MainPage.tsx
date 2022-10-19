import './style.scss';
import { InfoBlock } from './Info/InfoBlock';
import { Select } from './HiddenBlock/Select';
import { useSelector } from 'react-redux';
import { selectFilter } from '../redux/selectors';
import { ContactForm } from './contacts/ContactForm';
import { Container, FormContainer, Form, ButtonSend, FullInput } from './styles';
import OpenSelect from './OpenBlock/OpenSelect';

const MainPage = () => {
  const { cities, sourses } = useSelector(selectFilter);

  return (
    <Container>
      <InfoBlock />
      <FormContainer>
        <Form>
          <ContactForm />

<FullInput>

<OpenSelect value={cities} />
          <Select value={sourses} />

</FullInput>





        </Form>
        <ButtonSend>отправить форму</ButtonSend>
      </FormContainer>
    </Container>
  );
};

export default MainPage;
