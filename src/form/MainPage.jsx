import './style.scss';
import { Info } from './Info/Info';
import Select from './select/Select';

const MainPage = () => {
  return (
    <main className="container">
      <div className="box">
 <Info/>


<div class="wrapper">
  <div class="formContainer">
    <form id="submit-form" action="">



      <p>
      <label for="inputText">Ваше имя *</label>
        <input id="name" class="form-input" type="text" placeholder="Иван"/>
        <small class="name-error"></small>
      </p>


      <p>
      <label for="inputText">Номер телефона *</label>
        <input id="name" class="form-input" type="text" placeholder="+7 (000) 000-00"/>
        <small class="name-error"></small>
      </p>
      
       <p>
       <label for="inputText">Email *</label>
        <input id="email" class="form-input" type="email" placeholder="example@skdesign.ru"/>
        <small class="name-error"></small>
      </p>
      
      <p>
      <label for="inputText">Ссылка на профиль*</label>
        <input id="email" class="form-input" type="email" placeholder="instagram.com/skde…"/>
        <small class="name-error"></small>
      </p>



<div className="fullInput">
    <div className="select-wrapper">
    <select class="select">
        <option value="value1">Выберите город*</option>
        <option value="value1">Mango</option>
      </select>        
      <small></small>
    </div>
</div>


         <p class="fullInput">
         <label for="inputText">Название организации/студии</label>
        <input id="company-name" class="form-input" type="text" placeholder="SK Design" />
        <small></small>
      </p>
     
<Select/>
      </form>

      <button className='send'>отправить форму</button>

</div>
</div>




      </div>

      
    </main>
  );
};

export default MainPage;
