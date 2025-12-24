# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development server
bun dev

# Build
bun run build

# Lint and format
bun run lint          # Check with Biome
bun run format        # Format with Biome

# Database
bun run db:generate   # Generate Drizzle migrations
bun run db:migrate    # Run Drizzle migrations
```

## Architecture Overview

This is a Next.js 16 template with App Router, TypeScript, and PostgreSQL.

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

### Key Patterns

**Authentication**: Use `authClient` from `@/lib/auth-client` in client components, and `getSession()`/`getUser()` from `@/lib/auth-server` in server components.

**Database IDs**: All tables use UUIDv7 via `generateId()` from `@/lib/helpers/uuid`.

**Path Aliases**: Use `@/` for imports from project root.

### Environment Variables

Required in `.env`:
- `DATABASE_URL` - PostgreSQL connection string
