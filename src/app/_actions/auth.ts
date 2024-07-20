"use server";

import { redirect } from "next/navigation";

import { parseWithZod } from "@conform-to/zod";

import { loginSchema } from "~/app/_schema/auth";
import { toast } from "sonner";

export async function login(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, { schema: loginSchema });

  if (submission.status !== "success") {
    return submission.reply();
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("Login successful", submission.value);
  redirect("/confirm?email=" + submission.value.email);
}
