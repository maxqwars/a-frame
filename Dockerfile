# Stage 1
## Preprare app build

FROM node:17-alpine as builder
WORKDIR /app
COPY packages.json .
COPY pnpm-lock.yaml .
RUN npm install -g pnpm
COPY . .
RUN pnpm run build

# Stage 2
## Deploy app build

FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist
ENTRYPOINT ['nginx', "-g", "deamon off;"]