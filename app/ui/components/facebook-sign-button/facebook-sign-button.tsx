import Link from "next/link";
import Image from "next/image";
import type React from "react";
import { Layer } from "@/app/ui/components";
import FacebookImage from "@/public/Facebook.png";

const FacebookSignButton: React.FC = () => {
  return (
    <Link href="/login">
      <Layer className="flex justify-center gap-2 mt-5 p-2 border-[1px] border-stone-100 hover:text-white hover:bg-blue-600 shadow-sm rounded-md outline-none">
        <Image
          priority
          src={FacebookImage}
          width={26}
          height={26}
          alt="Google"
          style={{ height: "26px", width: "26px" }}
        />
        Sign in with Facebook
      </Layer>
    </Link>
  );
};

export default FacebookSignButton;
