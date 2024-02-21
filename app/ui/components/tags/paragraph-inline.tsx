import type React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const ParagraphInline: React.FC<Props> = ({ children, className }) => {
  return <span className={className ?? ""}>{children}</span>;
};

export default ParagraphInline;
