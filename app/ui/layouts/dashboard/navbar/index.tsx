import type React from "react";
import Header from "@/app/ui/layouts/dashboard/navbar/header";

const Navbar: React.FC = () => {
  return (
    <Header>
      <Header.Brand />
      <Header.Navigation />
    </Header>
  );
};

Navbar.displayName = "Navbar";

export default Navbar;
