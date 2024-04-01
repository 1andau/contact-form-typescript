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
  
};

export const InputText = ({ 
  placeholder, id, isRequired, register,  label,   error,
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
          data-testid={id}

      
        />
        {error && <ErrorMessage message={error.message} />}
        </p>
   </FormItem>



  
  );
}

