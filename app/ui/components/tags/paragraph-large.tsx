import type React from "react";
import { Paragraph } from "@/app/ui/components";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const ParagraphExtraLarge: React.FC<Props> = ({ children, className }) => {
  return (
    <Paragraph className={`text-lg ${className ?? ""}`}>{children}</Paragraph>
  );
};

export default ParagraphExtraLarge;
