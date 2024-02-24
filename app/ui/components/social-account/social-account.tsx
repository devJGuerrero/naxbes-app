import type React from "react";
import { Layer, Paragraph, Button } from "@/app/ui/components";
import Image, { type StaticImageData } from "next/image";

interface Props {
  socilName: string;
  socialImage: StaticImageData;
  device: string;
}

const SocialAccount: React.FC<Props> = async ({
  socilName,
  socialImage,
  device,
}) => {
  return (
    <Layer className="flex justify-between p-3 rounded-md shadow-md">
      <Layer className="flex gap-5 w-1/6">
        <Image src={socialImage} alt="Facebook" height={36} width={36} />{" "}
        <Paragraph className="self-center">{socilName}</Paragraph>
      </Layer>
      <Layer>
        <Paragraph className="self-center">{device}</Paragraph>
      </Layer>
      <Layer>
        <Paragraph className="self-center">2024-02-21 15:30</Paragraph>
      </Layer>
      <Layer>
        <Paragraph className="self-center">
          <Button className="border-[1px] py-1 px-4 rounded-md hover:bg-rose-600 hover:text-white">
            View
          </Button>
        </Paragraph>
      </Layer>
    </Layer>
  );
};

export default SocialAccount;
