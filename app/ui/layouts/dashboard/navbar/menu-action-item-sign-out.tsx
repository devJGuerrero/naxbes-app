import { SignOut } from "@/app/lib/actions/authentication";
import type React from "react";

interface Props {
  children?: React.ReactNode;
}

const MenuActionItemSignOut: React.FC<Props> = ({ children }) => {
  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form action={SignOut}>
      <button className="font-medium rounded-md p-2 hover:cursor-pointer active:bg-indigo-800/15 text-slate-700">
        {children ?? null}
      </button>
    </form>
  );
};

export default MenuActionItemSignOut;
