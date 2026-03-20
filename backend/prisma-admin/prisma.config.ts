import 'dotenv/config';
import { defineConfig, env } from 'prisma/config';
export default defineConfig({
  schema: './schema.admin.prisma',
  migrations: {
    path: './migrations',
  },
  datasource: {
    url: env('ADMIN_DATABASE_URL'),
  },
});
