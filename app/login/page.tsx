import Link from "next/link";
import type React from "react";
import { LoginForm } from "@/app/ui/forms";
import { Main, Flex, Typography } from "@/app/ui/components";

const LoginPage: React.FC = () => {
  return (
    <Main>
      <Flex className="flex gap-3 justify-end pt-5 pr-16">
        <Typography.Paragraph>Dont have an account?</Typography.Paragraph>
        <Link href="/login" className="font-medium text-blue-700">
          Sign up
        </Link>
      </Flex>
      <Flex className="justify-center mt-10">
        <LoginForm />
      </Flex>
    </Main>
  );
};

export default LoginPage;
