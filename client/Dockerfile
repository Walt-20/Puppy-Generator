# Use Node.js to build the React app
FROM node:18-alpine as build

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the code and build the React app
COPY . .
RUN npm run build

# Use nginx to serve the built React app
FROM nginx:alpine

# Copy the React build files from the previous stage to nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
