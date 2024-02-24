import type React from "react";
import { Paragraph } from "@/app/ui/components";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const ParagraphSmall: React.FC<Props> = ({ children, className }) => {
  return (
    <Paragraph className={`text-sm ${className ?? ""}`}>{children}</Paragraph>
  );
};

export default ParagraphSmall;
