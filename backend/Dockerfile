FROM node:21.0.0-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM node:21.0.0-alpine AS prod

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/build/. .
COPY --from=builder /app/src/views ./views

EXPOSE 8080

CMD ["npm" , "run", "startprod"]
