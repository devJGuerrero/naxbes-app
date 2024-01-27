import type React from "react";
import Navbar from "@/app/ui/layouts/dashboard/navbar";
import Wrapper from "@/app/ui/layouts/dashboard/wrapper";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return <>{children}</>;
};

Layout.displayName = "Layout";

export default Object.assign(Layout, {
  Navbar,
  Wrapper,
});
