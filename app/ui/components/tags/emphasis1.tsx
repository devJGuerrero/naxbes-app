import type React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Emphasis1: React.FC<Props> = ({ children, className }) => {
  return <h1 className={className ?? ""}>{children}</h1>;
};

export default Emphasis1;
