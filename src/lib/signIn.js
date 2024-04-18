"use server"
import { DEFAULT_LOGIN_REDIRECT } from "@/route";
import { signIn } from "@/auth";

export async function SignIn(username, password, value) {
  try {
    await signIn("credentials", {
      username,
      password,
      value,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });

    return "sucess"
  } catch (error) {
    return null;
  }
}