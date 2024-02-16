import type React from "react";
import Label from "@/app/ui/components/form/label";
import Input from "@/app/ui/components/form/input";
import Submit from "@/app/ui/components/form/submit";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const Field: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={`flex flex-col gap-1 ${className ?? ""}`}>{children}</div>
  );
};

Field.displayName = "Field";

export default Object.assign(Field, {
  Label,
  Input,
  Submit,
});
