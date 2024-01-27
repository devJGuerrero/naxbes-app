import type React from "react";
import Brand from "@/app/ui/layouts/dashboard/header/brand";
import Navigation from "@/app/ui/layouts/dashboard/header/navigation";

interface Props {
  children: React.ReactNode;
}

const Header: React.FC<Props> = ({ children }) => {
  return (
    <header className="flex h-16 px-36 bg-slate-50 border-b-[1px] border-b-gray-200">
      {children}
    </header>
  );
};

Header.displayName = "Header";

export default Object.assign(Header, {
  Brand,
  Navigation,
});
