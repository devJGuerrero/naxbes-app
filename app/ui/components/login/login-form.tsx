"use client";
import type React from "react";
import Form from "@/app/ui/components/form/form";
import { useFormState } from "react-dom";
import { authenticate } from "@/app/lib/actions/authenticate";

interface Props {
  children?: React.ReactNode;
}

const LoginForm: React.FC<Props> = ({ children }) => {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  return (
    <main className="flex items-center justify-center md:h-screen">
      <Form className="w-1/5" action={dispatch}>
        {children}
      </Form>
      {errorMessage ?? ""}
    </main>
  );
};

export default LoginForm;
