import type React from "react";
import { Button } from "@/app/ui/components";

interface Props {
  children?: React.ReactNode;
  id?: string | undefined;
  name?: string | undefined;
  className?: string;
}

const Submit: React.FC<Props> = ({ children, id, name, className }) => {
  return (
    <Button
      className={
        className ??
        `p-2 w-full font-bold bg-cerise-red-600 text-white hover:bg-cerise-red-700 rounded-md outline-none`
      }
      id={id}
      name={name}
      type="submit"
    >
      {children}
    </Button>
  );
};

export default Submit;
