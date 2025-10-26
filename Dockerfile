FROM node:alpine as build

COPY package.json package.json
RUN npm install
COPY . .
RUN npm run build:prod

EXPOSE 3009
CMD ["npm", "run", "server"]