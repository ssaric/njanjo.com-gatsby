FROM fholzer/nginx-brotli:latest

COPY ./public /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
