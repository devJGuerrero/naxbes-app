import type React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
  method?: string;
  action: string;
}

const Form: React.FC<Props> = ({ children, method, action, className }) => {
  return (
    <form method={method ?? "GET"} action={action} className={className ?? ""}>
      {children}
    </form>
  );
};

export default Form;
