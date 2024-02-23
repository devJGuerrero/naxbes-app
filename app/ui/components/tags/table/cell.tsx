import type React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const Cell: React.FC<Props> = ({ children, className }) => {
  return <td className={className ?? ""}>{children}</td>;
};

export default Cell;
