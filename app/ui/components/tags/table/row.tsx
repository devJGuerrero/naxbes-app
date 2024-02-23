import type React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const Row: React.FC<Props> = ({ children, className }) => {
  return <tr className={className ?? ""}>{children}</tr>;
};

export default Row;
