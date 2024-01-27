import { z } from "zod";
import bcrypt from "bcrypt";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { type User } from "@prisma/client";
import { authConfig } from "./auth.config";
import { findByEmail } from "./prisma/entities/user";

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      // @ts-expect-error: Unreachable code error
      async authorize(credentials): Promise<User | null> {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await findByEmail(email);
          if (user == null) {
            return null
          };
          const passwordMatch = await bcrypt.compare(password, user.password);
          if (passwordMatch) {
            return user;
          }
        }
        return null;
      }
    })
  ]
});
