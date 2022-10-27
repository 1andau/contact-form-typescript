import ErrorMessage from "../error/Eror";

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
   
<p>
<label htmlFor="inputText">{label}</label>
        <input
          className="form-input"
          id={id} 
          required={isRequired} 
          placeholder={placeholder}          
          {...register(id)}
      
        />
        {error && <ErrorMessage message={error.message} />}
        </p>

  
  );
}

