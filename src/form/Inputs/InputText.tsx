import ErrorMessage from "../error/Eror";

type Mode =
  | 'text'
  | 'tel'
  | 'email'
  | 'numeric'
  | 'linksSM'
 

  

  interface InputTextProps  {
  error: any;
  handleChange?: (event: any) => void;
  isRequired: boolean;
  register: any;
  label: string;
  name: string;
  placeholder: string;
  type: string;
  max?: number;
  mode?: Mode;
};

export const InputText = ({ name, error, isRequired, register, label, placeholder, handleChange, type,  max,
  mode,  }
  : InputTextProps) => {

  return (
      <p>
        <label htmlFor="inputText">{label}</label>
        <input
          className="form-input"
          onChange={handleChange}
          name={name}
          placeholder={placeholder}
          required={isRequired}
          {...register(name)}
          type={type}
          inputMode={mode}
          maxLength={max}
        />
        {error && <ErrorMessage message={error.message} />}
      </p>
  );
}

