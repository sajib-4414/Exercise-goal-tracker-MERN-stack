# Dockerfile for node client

# Build react client
FROM node:18-alpine

# Working directory be app
WORKDIR /usr/app

COPY package*.json ./

# does not work
# ENV NODE_ENV = production
# ENV PORT = 5000
# ENV MONGO_URI = mongodb+srv://shamsularefinsajib:cszGhucpyWEBExiD@cluster-mongo-db.uons7io.mongodb.net/mernapp?retryWrites=true&w=majority
# ENV JWT_SECRET = abc123

# RUN npm install
# If you are building your code for production
RUN npm ci --omit=dev
# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]