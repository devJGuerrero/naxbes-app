import type React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const HeadCell: React.FC<Props> = ({ children, className }) => {
  return <th className={className ?? ""}>{children}</th>;
};

export default HeadCell;
