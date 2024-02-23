import type React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const Body: React.FC<Props> = ({ children, className }) => {
  return <tbody className={className ?? ""}>{children}</tbody>;
};

export default Body;
