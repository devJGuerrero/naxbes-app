import type React from "react";
import Google from "@/public/Google.png";
import Facebook from "@/public/Facebook.png";
import { Layer, Paragraph, SocialAccount } from "@/app/ui/components";

const Users: React.FC = async () => {
  return (
    <Layer className="flex gap-5">
      <Layer className="w-1/5 p-14 rounded-md">
        <Paragraph className="font-bold">Users</Paragraph>
      </Layer>
      <Layer className="flex flex-col gap-5 grow p-14 rounded-md bg-white shadow-sm">
        <Paragraph className="font-bold">Associated accounts</Paragraph>
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
      </Layer>
    </Layer>
  );
};

export default Users;
