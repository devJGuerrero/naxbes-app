import Flex from "@/app/ui/helper/flex";
import type React from "react";
import IconNaxbes from "@/app/ui/icon/naxbes";
import BrandCaption from "@/app/ui/layouts/dashboard/brand-caption";

const Brand: React.FC = () => {
  return (
    <Flex className="w-1/6 gap-2">
      <IconNaxbes className="self-center" size="48px" />
      <BrandCaption />
    </Flex>
  );
};

export default Brand;
