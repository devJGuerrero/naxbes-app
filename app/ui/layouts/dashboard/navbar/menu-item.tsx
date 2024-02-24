import type React from "react";
import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
}

const MenuItem: React.FC<Props> = ({ href, children }) => {
  return (
    <Link href={href ?? "/"}>
      <li className="font-medium rounded-md py-2 px-3 hover:cursor-pointer active:bg-gray-100 text-slate-700">
        {children ?? null}
      </li>
    </Link>
  );
};

MenuItem.displayName = "MenuItem";

export default MenuItem;
