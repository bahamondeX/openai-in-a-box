FROM node:20 AS builder

WORKDIR /app

# Install dependencies first for better caching
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copy source files
COPY . .

RUN npm install
# Build with linting disabled
RUN npm run build

FROM node:20-slim AS runner
WORKDIR /app

ENV NODE_ENV production

# Copy built assets
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3333

# Properly set the port for Next.js
CMD ["npm", "start", "--", "-p", "3333"]