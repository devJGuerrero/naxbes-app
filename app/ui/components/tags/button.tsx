import type React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  id?: string | undefined;
  name?: string | undefined;
  type?: "submit" | "reset" | "button" | undefined;
}

const Button: React.FC<Props> = ({ children, className, id, name, type }) => {
  return (
    <button
      className={className ?? ""}
      id={id}
      name={name}
      type={type ?? "button"}
    >
      {children}
    </button>
  );
};

export default Button;
