# =====================
# Base
# =====================
FROM node:20-alpine AS base
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate

# =====================
# Dependencies
# =====================
FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# =====================
# Builder
# =====================
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

# =====================
# Runner (Standalone)
# =====================
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# copy only standalone output
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["node", "server.js"]
