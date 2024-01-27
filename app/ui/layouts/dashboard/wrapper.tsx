import type React from "react";
import Navbar from "@/app/ui/layouts/dashboard/navbar";
import Content from "@/app/ui/layouts/dashboard/content";

interface Props {
  children: React.ReactNode;
}

const Wrapper: React.FC<Props> = ({ children }) => {
  return <>{children}</>;
};

Wrapper.displayName = "Wrapper";

export default Object.assign(Wrapper, {
  Navbar,
  Content,
});
