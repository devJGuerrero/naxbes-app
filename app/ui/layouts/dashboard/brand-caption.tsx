import Link from "next/link";
import type React from "react";

const BrandCaption: React.FC = () => {
  return (
    <Link
      href="/dashboard"
      className="self-center text-lg font-bold text-slate-800"
    >
      <h1>Naxbes UI</h1>
    </Link>
  );
};

export default BrandCaption;
