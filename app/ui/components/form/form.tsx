import type React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
  action: (payload: FormData) => void;
}

const Form: React.FC<Props> = ({ children, className, action }) => {
  return (
    <form className={className ?? ""} action={action}>
      {children}
    </form>
  );
};

export default Form;
