import type React from "react";

interface Props {
  children?: React.ReactNode;
  id?: string | undefined;
  name?: string | undefined;
  className?: string;
  type?: React.HTMLInputTypeAttribute;
  value?: string | number | readonly string[] | undefined;
}

const Input: React.FC<Props> = ({
  children,
  id,
  name,
  type,
  className,
  value,
}) => {
  return (
    <input
      className={`py-2 px-3 border-[1px] border-stone-100  bg-stone-50 w-full rounded-md outline-none shadow-sm ${
        className ?? ""
      }`}
      id={id}
      name={name}
      type={type ?? "text"}
      defaultValue={value}
    >
      {children}
    </input>
  );
};

export default Input;
