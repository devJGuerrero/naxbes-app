"use client";

import Link from "next/link";
import type React from "react";
import { useFormState } from "react-dom";
import Image from "next/image";
import Naxbes from "@/public/Naxbes.svg";
import {
  Layer,
  Field,
  FormAction,
  Paragraph,
  ParagraphSmall,
  ParagraphLarge,
  ParagraphInline,
  GoogleSignButton,
  FacebookSignButton,
  ParagraphExtraLarge3,
} from "@/app/ui/components";
import { signInCredentials } from "@/app/lib/actions/authentication";

const LoginForm: React.FC = () => {
  const [error, dispatch] = useFormState(signInCredentials, undefined);
  return (
    <Layer className="flex-col gap-3 w-1/3 bg-white p-14 rounded-md shadow-sm">
      <Layer className="mb-3">
        <ParagraphExtraLarge3>Login</ParagraphExtraLarge3>
        <ParagraphLarge>
          Sign in to continue to{" "}
          <ParagraphInline className="font-bold">naxbes</ParagraphInline>{" "}
          <Image
            className="float-right"
            src={Naxbes}
            alt="Naxbes"
            height={80}
            width={80}
          />
        </ParagraphLarge>
        <GoogleSignButton />
        <FacebookSignButton />
      </Layer>
      <FormAction className="flex flex-col gap-3 mt-5" action={dispatch}>
        <ParagraphSmall>Sign in with email and password</ParagraphSmall>
        {error != null ? (
          <Paragraph className="text-red-600">{error}</Paragraph>
        ) : (
          ""
        )}
        <Layer className="flex flex-col gap-1">
          <Field>
            <Field.Label htmlForm="email">Email</Field.Label>
            <Field.Input id="email" name="email" type="email" />
          </Field>
        </Layer>
        <Layer className="flex flex-col gap-1">
          <Field>
            <Field.Label htmlForm="password">Password</Field.Label>
            <Field.Input id="password" name="password" type="password" />
          </Field>
        </Layer>
        <Link href="/dashboard" className="text-right">
          Forgot password?
        </Link>
        <Field>
          <Field.Submit>Sign In</Field.Submit>
        </Field>
      </FormAction>
    </Layer>
  );
};

export default LoginForm;
