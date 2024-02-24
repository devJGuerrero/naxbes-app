import Link from "next/link";
import type React from "react";

interface Props {
  children?: React.ReactNode;
  href: string;
}

const MenuActionItem: React.FC<Props> = ({ href, children }) => {
  return (
    <Link
      href={href ?? ""}
      className="font-medium rounded-md p-2 hover:cursor-pointer active:bg-gray-100 text-slate-700"
    >
      {children ?? null}
    </Link>
  );
};

MenuActionItem.displayName = "MenuActionItem";

export default MenuActionItem;
