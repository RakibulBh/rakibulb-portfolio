# syntax=docker/dockerfile:1

# Multi-stage build for the Next.js portfolio.
# - deps/builder use Bun (matches bun.lock) to install and build.
# - runner is a slim Node image that serves Next's standalone output.
#
# NEXT_PUBLIC_* values are inlined into the client bundle at build time, so the
# GitHub token must be passed as a build arg (see docker-compose.prod.yml).

# ---- deps: install dependencies ----
FROM oven/bun:1-alpine AS deps
WORKDIR /app
# Skip husky git-hook setup during install (no .git in the build context).
ENV HUSKY=0
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# ---- builder: compile the app ----
FROM oven/bun:1-alpine AS builder
WORKDIR /app
ENV HUSKY=0
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Baked into the client bundle at build time.
ARG NEXT_PUBLIC_GITHUB_TOKEN
ENV NEXT_PUBLIC_GITHUB_TOKEN=${NEXT_PUBLIC_GITHUB_TOKEN}

RUN bun run build

# ---- runner: minimal runtime ----
FROM node:24-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

# Standalone output bundles a minimal server + only the node_modules it needs.
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]
