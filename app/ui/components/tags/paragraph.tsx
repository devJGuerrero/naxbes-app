import type React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Paragraph: React.FC<Props> = ({ children, className }) => {
  return <p className={className ?? ""}>{children}</p>;
};

export default Paragraph;
