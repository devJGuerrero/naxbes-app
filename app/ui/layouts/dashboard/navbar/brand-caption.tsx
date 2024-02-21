import Link from "next/link";
import type React from "react";
import { Typography } from "@/app/ui/components";

const BrandCaption: React.FC = () => {
  return (
    <Link
      href="/dashboard"
      className="self-center text-lg font-bold text-slate-800"
    >
      <Typography.Emphasis1>naxbes</Typography.Emphasis1>
    </Link>
  );
};

export default BrandCaption;
