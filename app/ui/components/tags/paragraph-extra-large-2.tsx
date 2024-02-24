import type React from "react";
import { Paragraph } from "@/app/ui/components";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const ParagraphExtraLarge2: React.FC<Props> = ({ children, className }) => {
  return (
    <Paragraph className={`text-2xl ${className ?? ""}`}>{children}</Paragraph>
  );
};

export default ParagraphExtraLarge2;
