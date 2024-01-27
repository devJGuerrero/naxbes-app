import { PrismaClient, type User } from "@prisma/client";

function exclude<User, Key extends keyof User>(
  user: User,
  keys: Key[]
): User {
  return Object.fromEntries(
    // @ts-expect-error: Unreachable code error
    Object.entries(user).filter(([key]) => !keys.includes(key))
  ) as User;
}

/**
 * Get user by email
 * @param email string
 * @param excludePassword boolean
 * @returns Promise<User|null>
 */
export async function findByEmail(email: string): Promise<User|null> {
  try {
    const prisma = new PrismaClient(); return await prisma.user.findUnique({ where: { email } })
    .finally(() => {
      void prisma.$disconnect();
    });
  } catch (error) {
    console.log("Alert: It is not possible to consult the records.", error);
    throw new Error(
      "Failed to fetch user data."
    );
  }
}

/**
 * Get collection of users
 * @returns Promise<User[]>
 */
export async function findMany(): Promise<User[]> {
  try {
    const prisma = new PrismaClient(); return await prisma.user.findMany()
    .then((users) => users.map(user => exclude(user, ["password"])))
    .finally(() => {
        void prisma.$disconnect();
    })
  } catch (error) {
    console.log("Alert: It is not possible to consult the records.", error);
    throw new Error(
      "Failed to fetch users data."
    );
  }
}
