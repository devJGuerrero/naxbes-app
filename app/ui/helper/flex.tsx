import type React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Flex: React.FC<Props> = ({ children, className }) => {
  return <div className={`flex ${className ?? ""}`}>{children}</div>;
};

export default Flex;
