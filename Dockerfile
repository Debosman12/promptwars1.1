# Stage 1: Build the Vite App
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the App using Nginx
FROM nginx:alpine
# Copy the built assets from previous stage
COPY --from=build /app/dist /usr/share/nginx/html
# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port 8080 as expected by Cloud Run
EXPOSE 8080
# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
