"use client";

import type React from "react";
import Image from "next/image";
import GoogleImage from "@/public/Google.png";
import { getCsrfToken } from "next-auth/react";
import { Form, Field, Flex } from "@/app/ui/components";
import Submit from "@/app/ui/components/tags/form/submit";

const ButtonSignGoogle: React.FC = async () => {
  return (
    <Form method="post" action="/api/auth/signin/google">
      <Field.Input
        name="csrfToken"
        type="hidden"
        value={await getCsrfToken()}
      />
      <Submit name="submit" className="w-full">
        <Flex className="justify-center gap-2 mt-5 p-2 border-[1px] border-stone-100 hover:text-white hover:bg-blue-600 shadow-sm rounded-md outline-none">
          <Image
            src={GoogleImage}
            width={24}
            height={24}
            alt="Google"
            style={{ height: "24px", width: "24px" }}
          />
          Sign in with Google
        </Flex>
      </Submit>
    </Form>
  );
};

export default ButtonSignGoogle;
