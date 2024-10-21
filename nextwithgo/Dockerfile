# Use Node.js image for building the frontend
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
# COPY package*.json ./
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend source code
COPY . .

# Build the Next.js app
RUN npm run build

# Start the Next.js app
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app ./

# Expose the port the app runs on
# EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
