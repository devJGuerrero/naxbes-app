"use client";

import type React from "react";
import { getCsrfToken } from "next-auth/react";
import { Form, Field, Button } from "@/app/ui/components";

interface Props {
  children?: React.ReactNode;
}

const MenuActionItemSignOut: React.FC<Props> = async ({ children }) => {
  return (
    <Form method="post" action="/api/auth/signout">
      <Field.Input
        name="csrfToken"
        type="hidden"
        value={await getCsrfToken()}
      />
      <Button
        className="font-medium rounded-md p-2 hover:cursor-pointer active:bg-gray-100 text-slate-700"
        type="submit"
      >
        {children ?? null}
      </Button>
    </Form>
  );
};

export default MenuActionItemSignOut;
