import { type Config } from "drizzle-kit";

import { env } from "@/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    // Update for db integration
    // url: env.DATABASE_URL,
    url: "",
  },
  tablesFilter: ["clone-her-theme-editor_*"],
} satisfies Config;
