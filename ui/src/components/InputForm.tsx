import { useState } from "react";

interface InputFormProps {
  input: string;
  id: string;
  type: string;
  label: string;
  value?: string;
  className?: string;
  readOnly?: boolean;
}

const InputForm = (props: InputFormProps) => {
  const [input, setInput] = useState(props.input);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-base text-slate-600" htmlFor={props.id}>
        {props.label}
      </label>
      <input
        type={props.type}
        id={props.id}
        value={input}
        onChange={onChange}
        className={`${
          props.className ? props.className : ""
        } px-3 py-2 rounded-md bg-indigo-50/80 focus:ring-1 focus:ring-indigo-500 focus:outline-none`}
      />
    </div>
  );
};

export default InputForm;
