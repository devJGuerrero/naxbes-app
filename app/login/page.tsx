import type React from "react";
import Field from "@/app/ui/components/form/field";
import { LoginForm } from "@/app/ui/components";

const LoginPage: React.FC = () => {
  return (
    <LoginForm>
      <Field>
        <Field.Label htmlForm="email">Email</Field.Label>
        <Field.Input name="email" />
      </Field>
      <Field>
        <Field.Label htmlForm="password">Password</Field.Label>
        <Field.Input name="password" type="password" />
      </Field>
      <Field>
        <Field.Submit name="signin">Sign In</Field.Submit>
      </Field>
    </LoginForm>
  );
};

export default LoginPage;
