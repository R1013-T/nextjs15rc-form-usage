"use client";

import { useActionState } from "react";

import { getFormProps, useForm } from "@conform-to/react";
import { getZodConstraint, parseWithZod } from "@conform-to/zod";
import { login } from "../_actions/auth";
import { loginSchema } from "../_schema/auth";
import { Field, FieldError } from "~/components/field";
import { Label } from "~/components/ui/label";
import { InputConform } from "~/components/conform/input";
import { CheckboxConform } from "~/components/conform/checkbox";
import { Button } from "~/components/ui/button";
import { LoaderIcon } from "lucide-react";

export function LoginForm() {
  const [lastResult, action, pending] = useActionState(login, null);
  const [form, fields] = useForm({
    constraint: getZodConstraint(loginSchema),
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: loginSchema });
    },
  });

  return (
    <form {...getFormProps(form)} action={action} className="space-y-4">
      <Field>
        <Label htmlFor={fields.email.id}>Email</Label>
        <InputConform meta={fields.email} type="email" />
        {fields.email.errors && <FieldError>{fields.email.errors}</FieldError>}
      </Field>

      <Field>
        <Label htmlFor={fields.password.id}>Password</Label>
        <InputConform meta={fields.password} type="password" />
        {fields.password.errors && (
          <FieldError>{fields.password.errors}</FieldError>
        )}
      </Field>

      <Field>
        <div className="flex gap-2 items-center">
          <CheckboxConform meta={fields.remember} />
          <Label htmlFor={fields.remember.id}>Agree to terms</Label>
        </div>
        {fields.remember.errors && (
          <FieldError>{fields.remember.errors}</FieldError>
        )}
      </Field>

      <Button disabled={pending}>
        {pending ? (
          <>
            <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
            Loading...
          </>
        ) : (
          "Login"
        )}
      </Button>
    </form>
  );
}
