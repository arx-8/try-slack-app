# Builder container
FROM node:16.14.2 as builder
WORKDIR /work
COPY . .
RUN yarn install --frozen-lockfile && \
    yarn build

# Runtime container
FROM gcr.io/distroless/nodejs:16
COPY --from=builder /work/dist /dist

CMD ["/dist/index.js"]
