FROM golang:1.20.4-alpine3.16@sha256:6469405d7297f82d56195c90a3270b0806ef4bd897aa0628477d9959ab97a577 as build
WORKDIR /build
RUN apk add --no-cache hugo git
COPY . .
RUN hugo --minify

FROM nginx:1.27.3-alpine@sha256:9b460c5ee96333b43a92df16351e150af717ad6522101e52d05d255cd7241064 as prod
COPY --from=build /build/public/ /usr/share/nginx/html/
EXPOSE 80