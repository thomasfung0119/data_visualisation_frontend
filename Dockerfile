# Node 19.2 base image
FROM node:19.2-alpine 

# Setup
WORKDIR /app
COPY . .
RUN npm ci 
EXPOSE 3000

# Start the app
CMD [ "npm", "start"]