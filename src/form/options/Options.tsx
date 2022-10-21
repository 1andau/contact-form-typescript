import { FormEvent } from 'react';
import {SelectButton, SelectDiv } from '../styles'; 

export interface OptionsProps {
    label: string;
    value: string;
  }

  interface SelecterProps {
    handleSelect: (event: FormEvent) => void;
    name: string;
    options: Array<OptionsProps>;
    register: any;
  }

export const Options = ({ name, options, register, handleSelect}: SelecterProps):JSX.Element => (

      <SelectDiv>
        <SelectButton name={name} {...register(name)}>
          {options.map((obj, index) => (
            <option
            key={index} 
            onChange={handleSelect}
            value={obj.value}>
          {obj.label}
            </option>
          ))}
        </SelectButton>

      </SelectDiv>

)