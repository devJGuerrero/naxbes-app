import Link from "next/link";
import type React from "react";
import { Paragraph } from "@/app/ui/components";

const BrandCaption: React.FC = () => {
  return (
    <Link
      href="/dashboard"
      className="self-center text-lg font-bold text-slate-800"
    >
      <Paragraph>naxbes</Paragraph>
    </Link>
  );
};

export default BrandCaption;
