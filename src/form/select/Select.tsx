import React from 'react'




 type SelectProps = {
  id: string;
  isRequired: boolean;
  register: Function;
  options: object;
  children: React.ReactNode;
 }

const renderOptions = (options: object) => {
  return Object.entries(options).map(([key, value]) => (
    <option key={key} value={key}> {value} </option>
  ))
}



const Select = ({ id, children, isRequired, register, options }: SelectProps) => {



    // const [open, setOpen] = React.useState(false);




  return (


    <div className='fullInput'>
          <div className="select-wrapper">
    {/* <p key={id}>
      {children}
      {renderAsterisk(isRequired)}
    </p> */}
    <select className="select" id={id} required={isRequired} {...register(id)}>
      <option className='dynamic' label="" hidden />
      {renderOptions(options)}
    </select>
  </div>
</div>









  )
}

export default Select