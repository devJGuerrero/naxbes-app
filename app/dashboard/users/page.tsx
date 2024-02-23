import type React from "react";
import Google from "@/public/Google.png";
import Facebook from "@/public/Facebook.png";
import { Flex, Typography, SocialAccount } from "@/app/ui/components";

const Users: React.FC = async () => {
  return (
    <Flex className="gap-5">
      <Flex className="w-1/5 p-10 rounded-md">
        <Typography.Paragraph className="font-bold">Users</Typography.Paragraph>
      </Flex>
      <Flex className="flex-col gap-5 grow p-10 rounded-md bg-white">
        <Typography.Paragraph className="font-bold">
          Associated accounts
        </Typography.Paragraph>
        <SocialAccount
          socialImage={Facebook}
          socilName="Facebook"
          device="Mobile"
        />
        <SocialAccount
          socialImage={Google}
          socilName="Google"
          device="Mobile"
        />
      </Flex>
    </Flex>
  );
};

export default Users;
