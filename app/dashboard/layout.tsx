import type React from "react";
import Layout from "@/app/ui/layouts/dashboard";

interface Props {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <Layout>
      <Layout.Navbar />
      <Layout.Wrapper>{children}</Layout.Wrapper>
    </Layout>
  );
};

export default DashboardLayout;
