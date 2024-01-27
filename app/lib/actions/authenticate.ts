"use server";
import { AuthError } from "next-auth";
import { signIn, signOut } from "@/auth";

/**
 * Action: Request to authenticate a user
 * @param prevState string | undefined
 * @param formData FormData
 * @returns Promise<"Invalid credentials." | "Something went wrong." | undefined>
 */
export async function authenticate(
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

/**
 * Action: Request to close a user's session
 * @param payload FormData
 */
export async function signOutSession(payload: FormData): Promise<void> {
  await signOut();
}
