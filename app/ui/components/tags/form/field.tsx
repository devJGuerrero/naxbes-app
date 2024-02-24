import type React from "react";
import { Layer } from "@/app/ui/components";
import Label from "@/app/ui/components/tags/form/label";
import Input from "@/app/ui/components/tags/form/input";
import Submit from "@/app/ui/components/tags/form/submit";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const Field: React.FC<Props> = ({ children, className }) => {
  return (
    <Layer className={`flex flex-col gap-1 ${className ?? ""}`}>
      {children}
    </Layer>
  );
};

Field.displayName = "Field";

export default Object.assign(Field, {
  Label,
  Input,
  Submit,
});
