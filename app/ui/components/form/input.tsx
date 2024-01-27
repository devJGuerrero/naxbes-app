import type React from "react";

interface Props {
  children?: React.ReactNode;
  name: string;
  className?: string;
  type?: React.HTMLInputTypeAttribute;
}

const Input: React.FC<Props> = ({ children, name, type, className }) => {
  return (
    <input
      className={`p-1 border-2 border-gray-200 w-full rounded-sm outline-none ${
        className ?? ""
      }`}
      id={name}
      name={name}
      type={type ?? "text"}
    >
      {children}
    </input>
  );
};

export default Input;
