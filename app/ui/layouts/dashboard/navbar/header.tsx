import type React from "react";
import Brand from "@/app/ui/layouts/dashboard/navbar/brand";
import Navigation from "@/app/ui/layouts/dashboard/navbar/navigation";

interface Props {
  children: React.ReactNode;
}

const Header: React.FC<Props> = ({ children }) => {
  return (
    <header className="flex h-16 px-44 bg-white shadow-sm">{children}</header>
  );
};

Header.displayName = "Header";

export default Object.assign(Header, {
  Brand,
  Navigation,
});
