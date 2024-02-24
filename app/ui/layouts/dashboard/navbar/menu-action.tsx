import type React from "react";
import { Layer } from "@/app/ui/components";
import Item from "@/app/ui/layouts/dashboard/navbar/menu-action-item";
import ItemSignOut from "@/app/ui/layouts/dashboard/navbar/menu-action-item-sign-out";

interface Props {
  children: React.ReactNode;
}

const MenuAction: React.FC<Props> = ({ children }) => {
  return <Layer className="self-center flex gap-2">{children}</Layer>;
};

MenuAction.displayName = "MenuAction";

export default Object.assign(MenuAction, {
  Item,
  ItemSignOut,
});
