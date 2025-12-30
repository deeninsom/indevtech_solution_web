# --- Stage 1: Build app ---
FROM node:20-alpine AS builder
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files dulu untuk caching
COPY package.json pnpm-lock.yaml ./

# Install dependencies (dev + prod)
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build Next.js pakai pnpm
RUN pnpm build

# --- Stage 2: Production runner ---
FROM node:20-alpine AS runner
WORKDIR /app

# Buat user non-root
RUN addgroup -g 1001 -S nodejs \
    && adduser -u 1001 -S nodejs -G nodejs

USER nodejs
ENV NODE_ENV=production
EXPOSE 3000

# Copy hasil build + public + package.json
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Install hanya production dependencies
RUN pnpm install --prod

# Start Next.js pakai pnpm
CMD ["pnpm", "start"]
