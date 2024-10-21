# Use Node.js base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json, then install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire server code, including TypeScript files and .env
COPY . .

# Transpile TypeScript to JavaScript
RUN npx tsc

# Expose the backend port
EXPOSE 5000

# Start the server
CMD ["node", "./dist/index.js"]
