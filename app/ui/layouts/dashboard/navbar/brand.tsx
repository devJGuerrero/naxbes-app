import type React from "react";
import Image from "next/image";
import Naxbes from "@/public/Naxbes.svg";
import { Layer } from "@/app/ui/components";
import BrandCaption from "@/app/ui/layouts/dashboard/navbar/brand-caption";

const Brand: React.FC = () => {
  return (
    <Layer className="flex w-1/6 gap-1">
      <Layer>
        <Image src={Naxbes} alt="Naxbes" className="h-[64px] w-[64px]" />
      </Layer>
      <BrandCaption />
    </Layer>
  );
};

export default Brand;
