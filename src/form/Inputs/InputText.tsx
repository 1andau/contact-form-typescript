import ErrorMessage from "../error/Eror";
import { FormInput } from "../styles";
import { FormItem } from "../styles";


export type InputTextProps = {
  placeholder: string;
  id: string;
  isRequired: boolean;
  register: Function;
  children: React.ReactNode;
  label: string;
  error: any;
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

};

export const InputText = ({ 
  placeholder, id, isRequired, register,  label,   error, 
  value, 
  onChange

  }
  : InputTextProps) => {

  return (
    <FormItem>
      <p>
        <label>{label}</label>
        <FormInput
          id={id}
          required={isRequired}
          placeholder={placeholder}
          {...register(id)}
          value={value}
          onChange={onChange}
          // data-testid={id}
        />
        {error && <ErrorMessage message={error.message} />}
      </p>
    </FormItem>


  );
}





