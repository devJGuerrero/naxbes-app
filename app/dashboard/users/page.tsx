import type React from "react";
import { findMany } from "@/prisma/entities/user";

export default async function Users(): Promise<React.JSX.Element> {
  const users = await findMany();
  return (
    <>
      <p>Users -- Dashboard</p>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </>
  );
}
