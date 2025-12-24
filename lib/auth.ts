import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/lib/db/core";
import {
  accountTable,
  sessionTable,
  userTable,
  verificationTable,
} from "@/lib/db/schema/app";
import { generateId } from "./helpers/uuid";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      user: userTable,
      session: sessionTable,
      account: accountTable,
      verification: verificationTable,
    },
  }),
  advanced: {
    database: {
      generateId: () => generateId(),
    },
  },
  emailAndPassword: {
    enabled: true,
  },
});
