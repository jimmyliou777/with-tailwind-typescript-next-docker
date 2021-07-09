FROM node:current-alpine
RUN mkdir -p /usr/src/app
ENV NODE_ENV production
ENV PORT=3000
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN apk add --no-cache git
RUN yarn install && yarn cache clean
COPY . /usr/src/app/
RUN yarn build:tsc
RUN yarn build
EXPOSE 80
CMD [ "node", "dist/server.js" ]
