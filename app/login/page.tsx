import type React from "react";
import Link from "next/link";
import { Main, LoginForm, Flex } from "@/app/ui/components";

const LoginPage: React.FC = () => {
  return (
    <Main>
      <Flex className="flex gap-3 justify-end pt-5 pr-16">
        <p>Dont have an account?</p>
        <Link href="/login" className="font-medium text-blue-700">
          Sign up
        </Link>
      </Flex>
      <Flex className="flex justify-center mt-10">
        <LoginForm />
      </Flex>
    </Main>
  );
};

export default LoginPage;
