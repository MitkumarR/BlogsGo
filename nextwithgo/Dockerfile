# # Stage 1: Build the Next.js app
# FROM node:18-alpine AS builder

# # Set the working directory inside the container
# WORKDIR /app

# # Copy the package.json and package-lock.json to the working directory
# COPY package.json package-lock.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code to the container
# COPY . .

# # Build the Next.js app for production
# RUN npm run build

# # Stage 2: Serve the app
# FROM node:18-alpine

# # Set the working directory inside the container
# WORKDIR /app

# # Copy the built app from the previous stage
# COPY --from=builder /app ./

# # Install only production dependencies (optional, but recommended for smaller image size)
# RUN npm install --production

# # Expose the port that Next.js runs on
# EXPOSE 3000

# # Command to start the Next.js app in production mode
# CMD ["npm", "start"]


# Use Node.js image for building the frontend
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend source code
COPY . .

# Build the Next.js app
RUN npm run build

# Use a minimal base image to run the application
FROM node:18-alpine

# Set the working directory for the final image
WORKDIR /app

# Copy only the necessary files for production from the builder stage
COPY --from=builder /app ./

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app in production mode
CMD ["npm", "start"]


