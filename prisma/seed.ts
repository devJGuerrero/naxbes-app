import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(): Promise<void> {
  const jose = await prisma.user.upsert({
    where: { email: "jose.guerrero.carrizo@gmail.com"},
    update: {},
    create: {
      name: "Jose Guerrero",
      email: "jose.guerrero.carrizo@gmail.com",
      password: await bcrypt.hash("123456", 10),
    }
  });
  console.log(jose);
}

main().then(async () => {
  await prisma.$disconnect();
})
.catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
