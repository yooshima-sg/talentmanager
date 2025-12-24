# NextJS App Templates

## Getting Started

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### Tech Stack
- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4 + shadcn/ui (new-york style)
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: better-auth with email/password
- **Forms**: react-hook-form + zod
- **Linting**: Biome (not ESLint)

### Directory Structure

- `app/` - Next.js App Router pages and layouts
  - `(auth)/` - Auth route group (login, signup)
  - `api/auth/[...all]/` - better-auth API handler
- `lib/` - Core application code
  - `auth.ts` - better-auth configuration
  - `auth-client.ts` - Client-side auth (use in client components)
  - `auth-server.ts` - Server-side auth helpers (`getSession()`, `getUser()`)
  - `db/core.ts` - Drizzle database connection
  - `db/schema/` - Drizzle table schemas
  - `db/repository/` - Data access layer (create repository files here)
  - `types/` - Application type definitions
  - `helpers/uuid.ts` - UUIDv7 generator for IDs
  - `css/utils.ts` - Tailwind `cn()` utility
- `components/` - React components
  - `ui/` - shadcn/ui components