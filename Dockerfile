# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:10 as build-stage
RUN npm install -g gatsby-cli
# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package.json yarn.lock  ./
RUN yarn

# Copying source files
COPY . .

# Building app
RUN gatsby build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM fholzer/nginx-brotli

COPY --from=build-stage /usr/src/app/public/ /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY --from=build-stage /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf
