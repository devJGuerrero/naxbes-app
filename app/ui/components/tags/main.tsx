import type React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Main: React.FC<Props> = ({ children, className }) => {
  return <main className={className ?? ""}>{children}</main>;
};

export default Main;
