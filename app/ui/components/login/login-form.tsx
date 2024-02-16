"use client";
import Link from "next/link";
import type React from "react";
import { useFormState } from "react-dom";
import {
  Main,
  Form,
  Flex,
  Field,
  ButtonSignGoogle,
  ButtonSignFacebook,
} from "@/app/ui/components";

const LoginForm: React.FC = () => {
  const [, dispatch] = useFormState(() => console.log, undefined);
  return (
    <Flex className="flex-col gap-3 w-1/4">
      <Main className="mb-3">
        <h1 className="text-3xl">Login</h1>
        <h1 className="text-lg">Sign in to continue to naxbes</h1>
        <ButtonSignGoogle />
        <ButtonSignFacebook />
      </Main>
      <Form className="flex flex-col gap-3" action={dispatch}>
        <h1 className="text-sm">Sign in with email and password</h1>
        <Field>
          <Field.Label htmlForm="email">Email</Field.Label>
          <Field.Input type="email" name="email" />
        </Field>
        <Field>
          <Field.Label htmlForm="password">Password</Field.Label>
          <Field.Input type="password" name="password" />
        </Field>
        <Link href="/dashboard" className="text-blue-700 text-right">
          Forgot password?
        </Link>
        <Field>
          <Field.Submit name="signin">Sign In</Field.Submit>
        </Field>
      </Form>
    </Flex>
  );
};

export default LoginForm;
