"use client";

import Link from "next/link";
import type React from "react";
import { useFormState } from "react-dom";
import {
  Main,
  Flex,
  Field,
  Typography,
  FormAction,
  ButtonSignGoogle,
  ButtonSignFacebook,
} from "@/app/ui/components";
import { signInCredentials } from "@/app/lib/actions/authentication";
import Image from "next/image";
import Naxbes from "@/public/Naxbes.svg";

const LoginForm: React.FC = () => {
  const [error, dispatch] = useFormState(signInCredentials, undefined);
  return (
    <Flex className="flex-col gap-3 w-1/3 bg-white p-14 rounded-md">
      <Main className="mb-3">
        <Typography.Emphasis1 className="text-3xl">Login</Typography.Emphasis1>
        <Typography.Emphasis1 className="text-lg">
          Sign in to continue to{" "}
          <Typography.ParagraphInline className="font-bold">
            naxbes
          </Typography.ParagraphInline>{" "}
          <Image
            src={Naxbes}
            alt="Naxbes"
            height={80}
            width={80}
            className="float-right"
          />
        </Typography.Emphasis1>
        <ButtonSignGoogle />
        <ButtonSignFacebook />
      </Main>
      <FormAction action={dispatch} className="flex flex-col gap-3">
        <Typography.Emphasis1 className="text-sm">
          Sign in with email and password
        </Typography.Emphasis1>
        {error != null ? (
          <Typography.Paragraph className="text-red-600">
            {error}
          </Typography.Paragraph>
        ) : (
          ""
        )}
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
      </FormAction>
    </Flex>
  );
};

export default LoginForm;
