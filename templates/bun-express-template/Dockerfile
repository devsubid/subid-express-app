FROM oven/bun

WORKDIR /app

COPY package.json bun.lockb* ./

RUN bun install --force

COPY . .

RUN bun run build

EXPOSE 3000

CMD ["bun", "run", "start"]