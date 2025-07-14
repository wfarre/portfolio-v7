import React from "react";

interface Props {
  id: string;
  label: string;
  type: "textarea" | "text" | "email";
  value: string;
  error?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const FormInput = (props: Props) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    props.onChange(e);
  };

  return (
    <div className="flex flex-col">
      <label className="mb-2 font-bold text-xs md:text-sm" htmlFor={props.id}>
        {props.label}
      </label>
      {props.type === "textarea" ? (
        <textarea
          className="px-4 py-2 border rounded-lg"
          id="message"
          value={props.value}
          onChange={handleChange}
        ></textarea>
      ) : (
        <input
          className="px-4 py-2 border rounded-lg"
          type={props.type}
          id={props.id}
          value={props.value}
          onChange={handleChange}
        />
      )}
      {props.error && (
        <span className="text-red-500 text-xs">{props.error}</span>
      )}
    </div>
  );
};

export default FormInput;
