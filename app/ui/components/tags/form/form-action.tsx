import type React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
  action: (payload: FormData) => void;
}

const FormAction: React.FC<Props> = ({ children, action, className }) => {
  return (
    <form action={action} className={className ?? ""}>
      {children}
    </form>
  );
};

export default FormAction;
