import React from 'react'

export const ContactForm = () => {

  return (
    <>
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


    </>
  )
}

