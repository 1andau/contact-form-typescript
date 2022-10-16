import React, { useEffect } from 'react'
import { useState } from 'react'


const Select:React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const sortRef = React.useRef<HTMLDivElement>(null);

  
  return (
<div className="fullInput" ref={sortRef}>
<span onClick={() => setOpen(!open)}> Показать дополнительные поля ▾</span>


{open && (
  <div className="fullInput">
    <p>
      <label htmlFor="inputText">Получатель</label>
        <input id="name" className="form-input" type="text" placeholder="ФИО"/>
        <small className="name-error"></small>
      </p>



      <div className="select-wrapper">
    <select className="select">

<small></small>

</select>        
</div>
  </div>

   
)}

</div>

  )
}

export default Select