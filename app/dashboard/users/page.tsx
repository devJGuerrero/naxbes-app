import type React from "react";
import { findMany } from "@/prisma/entities/user";

const Users: React.FC = async () => {
  const users = await findMany();
  return (
    <>
      <p>Users -- Dashboard</p>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </>
  );
}

export default Users;