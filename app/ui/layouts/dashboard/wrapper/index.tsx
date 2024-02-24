import type React from "react";
import { Layer } from "@/app/ui/components";

interface Props {
  children: React.ReactNode;
}

const Wrapper: React.FC<Props> = ({ children }) => {
  return <Layer className="pt-12 px-44">{children}</Layer>;
};

Wrapper.displayName = "Wrapper";

export default Wrapper;
