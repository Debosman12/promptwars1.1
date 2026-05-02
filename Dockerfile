# Stage 1: Build the Vite App
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the App using Python Flask
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the built assets from previous stage
COPY --from=build /app/dist ./dist
COPY app.py .

# Expose port 8080 as expected by Cloud Run
EXPOSE 8080

# Start Gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:8080", "app:app"]
