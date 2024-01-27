import Item from "@/app/ui/layouts/dashboard/header/menu-item";
import type React from "react";
import Action from "@/app/ui/layouts/dashboard/header/menu-action";
import Wrapper from "@/app/ui/layouts/dashboard/header/menu-wrapper";

interface Props {
  children: React.ReactNode;
}

const Menu: React.FC<Props> = ({ children }) => {
  return (
    <nav className="self-center flex grow justify-between">{children}</nav>
  );
};

Menu.displayName = "Menu";

export default Object.assign(Menu, {
  Item,
  Action,
  Wrapper,
});
