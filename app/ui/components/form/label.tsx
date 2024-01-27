import type React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
  htmlForm: string;
}

const Label: React.FC<Props> = ({ children, className, htmlForm }) => {
  return (
    <label className={className ?? ""} htmlFor={htmlForm}>
      {children}
    </label>
  );
};

export default Label;
