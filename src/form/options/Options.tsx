import { FormEvent } from 'react';
import { SelectButton, SelectDiv } from '../styles';
import ErrorMessage from "../error/Eror";

type OptionsProps = {
  label: string;
  value: string;
};

interface SelecterProps {
  id: string;
  options: Array<OptionsProps>;
  register: any;
  isRequired: boolean;
  error: any; 

}

export const Options = ({
  id,
  options,
  register,
  isRequired,
  error, 

}: SelecterProps)=> (
  <SelectDiv >
    <SelectButton  id={id} required={isRequired} {...register(id)}>
      {options.map((obj, index) => (
        <option
          key={index}>
          {obj.label}
        </option>
      ))}
    </SelectButton>
    {error && <ErrorMessage message={error.message} />}

  </SelectDiv>
);
