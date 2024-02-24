import Link from "next/link";
import type React from "react";
import { Layer, Paragraph, LoginForm } from "@/app/ui/components";

const LoginPage: React.FC = () => {
  return (
    <Layer>
      <Layer className="flex gap-3 justify-end pt-5 pr-16">
        <Paragraph>Dont have an account?</Paragraph>
        <Link href="/login" className="font-medium text-blue-700">
          Sign up
        </Link>
      </Layer>
      <Layer className="flex justify-center mt-10">
        <LoginForm />
      </Layer>
    </Layer>
  );
};

export default LoginPage;
