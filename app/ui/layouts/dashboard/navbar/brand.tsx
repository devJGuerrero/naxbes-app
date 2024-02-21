import { Flex } from "@/app/ui/components";
import Image from "next/image";
import type React from "react";
import Naxbes from "@/public/Naxbes.svg";
import BrandCaption from "@/app/ui/layouts/dashboard/navbar/brand-caption";

const Brand: React.FC = () => {
  return (
    <Flex className="w-1/6 gap-1">
      <div>
        <Image src={Naxbes} alt="Naxbes" className="h-[64px] w-[64px]" />
      </div>
      <BrandCaption />
    </Flex>
  );
};

export default Brand;
