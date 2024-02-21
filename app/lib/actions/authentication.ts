"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function signInCredentials(
  prevState: string | undefined,
  formData: FormData
): Promise<"Invalid credentials." | "Something went wrong." | undefined> {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
