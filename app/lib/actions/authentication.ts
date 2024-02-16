"use server";
import { AuthError } from "next-auth";
import { signIn, signOut } from "@/auth";

export async function signInGoogle(prevState: string | undefined, formData: FormData) {
  try {
    console.log("sign in google");
    await signIn("google", {
      callbackUrl: `http://localhost:3000/dashboard`,
    });
  } catch (error) {
    console.log(error);
    if (error instanceof AuthError && error.message != "") {
      return error.message;
    }
    return "";
  }
}

export async function SignOut(): Promise<void> {
  await signOut();
}
