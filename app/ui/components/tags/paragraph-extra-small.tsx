import type React from "react";
import { Paragraph } from "@/app/ui/components";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const ParagraphExtraSmall: React.FC<Props> = ({ children, className }) => {
  return (
    <Paragraph className={`text-xs ${className ?? ""}`}>{children}</Paragraph>
  );
};

export default ParagraphExtraSmall;
