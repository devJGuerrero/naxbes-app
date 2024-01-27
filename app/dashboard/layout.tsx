import type React from "react";
import Wrapper from "@/app/ui/layouts/dashboard/wrapper";

interface Props {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Wrapper.Navbar />
      <Wrapper.Content>{children}</Wrapper.Content>
    </Wrapper>
  );
};

export default DashboardLayout;
