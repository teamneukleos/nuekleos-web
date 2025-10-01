import * as fs from "fs/promises";
import { ParseArgsConfig } from "util";
import { PrismaClient } from "@prisma/client";
import { parseArgs } from "node:util";
import { USER_ROLES } from "@/lib/constants";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();
const config: ParseArgsConfig = { options: { environment: { type: "string" } } };

async function seedUsers () {
  const superAdmin =  {
    name: "Super Admin",
    email: "neukloes.super.admin@testmail.com",
    password: "secret",
    role: USER_ROLES.ADMIN
  };

  await prisma.user.upsert(
    {
      where: { email: superAdmin.email },
      update: {
        name: superAdmin.name,
        role: superAdmin.role
      },
      create: {
        ...superAdmin,
        password: bcrypt.hashSync(superAdmin.password, 10),
      }
    }
  );

  console.log("Users seeding complete");
}

async function seedDev () {
  try {
    await seedUsers();
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

/**
 * NOTE
 * ⚠️ Only modify this if you know what you are doing
 * -------------------------------------------------
 * This should be idempotent so that it can be ran in production
 * without modifying already existing records.
 */
async function seedProd () {
  try {
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

async function main () {
  const { values: { environment } } = parseArgs(config);

  if (
    environment
      ?.toString()
      ?.toLocaleLowerCase()
      ?.includes("prod")
  ) {
    await seedProd();

    return;
  }

  await seedDev();
}

main();
