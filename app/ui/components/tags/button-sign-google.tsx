"use client";
import Image from "next/image";
import Submit from "../form/submit";
import type React from "react";
import GoogleImage from "@/public/Google.png";
import { getCsrfToken } from "next-auth/react";

const ButtonSignGoogle: React.FC = async () => {
  return (
    <form method="post" action="/api/auth/signin/google">
      <input
        name="csrfToken"
        type="hidden"
        defaultValue={await getCsrfToken()}
      />
      <Submit name="submit" className="w-full">
        <div className="flex justify-center gap-2 mt-5 p-2 border-[1px] border-stone-100 hover:text-white hover:bg-blue-600 shadow-sm rounded-md outline-none">
          <Image
            src={GoogleImage}
            width={24}
            height={24}
            alt="Google"
            style={{ height: "24px", width: "24px" }}
          />
          Sign in with Google
        </div>
      </Submit>
    </form>
  );
};

export default ButtonSignGoogle;
