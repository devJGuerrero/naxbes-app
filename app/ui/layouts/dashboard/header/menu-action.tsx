import type React from "react";
import Item from "@/app/ui/layouts/dashboard/header/menu-action-item";
import ItemSignOut from "@/app/ui/layouts/dashboard/header/menu-action-item-sign-out";

interface Props {
  children: React.ReactNode;
}

const MenuAction: React.FC<Props> = ({ children }) => {
  return <div className="self-center flex gap-2">{children}</div>;
};

MenuAction.displayName = "MenuAction";

export default Object.assign(MenuAction, {
  Item,
  ItemSignOut,
});
