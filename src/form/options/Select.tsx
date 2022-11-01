import { SelectButton, SelectDiv } from '../styles';
import ErrorMessage from "../error/Eror";

type OptionsProps = {
  label: string;
  value: string;
};

export interface SelecterProps {
  id: string;
  options: Array<OptionsProps>;
  register: any;
  isRequired: boolean;
  error: any; 

}

export const Select = ({
  id,
  options,
  register,
  isRequired,
  error, 

}: SelecterProps)=> (
  <SelectDiv >
    <SelectButton id={id}  data-testid={id}  required={isRequired} {...register(id)}>
      {options.map((obj, index) => (
        <option 
        value= {obj.value}
          key={index}>
          {obj.label}
        </option>
      ))}
    </SelectButton>
    {error && <ErrorMessage message={error.message} />}

  </SelectDiv>
);
