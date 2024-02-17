"use client";
import type React from "react";
import { getCsrfToken } from "next-auth/react";

interface Props {
  children?: React.ReactNode;
}

const MenuActionItemSignOut: React.FC<Props> = async ({ children }) => {
  return (
    <form method="post" action="/api/auth/signout">
      <input
        name="csrfToken"
        type="hidden"
        defaultValue={await getCsrfToken()}
      />
      <button className="font-medium rounded-md p-2 hover:cursor-pointer active:bg-indigo-800/15 text-slate-700">
        {children ?? null}
      </button>
    </form>
  );
};

export default MenuActionItemSignOut;
