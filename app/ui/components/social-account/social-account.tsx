import type React from "react";
import { Flex, Typography } from "@/app/ui/components";
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
    <Flex className="justify-between p-3 rounded-md shadow-md">
      <Flex className="gap-5 w-1/6">
        <Image src={socialImage} alt="Facebook" height={36} width={36} />{" "}
        <Typography.Paragraph className="self-center">
          {socilName}
        </Typography.Paragraph>
      </Flex>
      <Flex>
        <Typography.Paragraph className="self-center">
          {device}
        </Typography.Paragraph>
      </Flex>
      <Flex>
        <Typography.Paragraph className="self-center">
          2024-02-21 15:30
        </Typography.Paragraph>
      </Flex>
      <Flex>
        <Typography.Paragraph className="self-center">
          <button className="border-[1px] py-1 px-4 rounded-md hover:bg-rose-600 hover:text-white">
            View
          </button>
        </Typography.Paragraph>
      </Flex>
    </Flex>
  );
};

export default SocialAccount;
