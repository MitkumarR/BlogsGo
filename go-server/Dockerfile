# Use the official Go image to build the Go application
FROM golang:1.20 AS builder

# Set the working directory
WORKDIR /app

# Copy the Go module files and download the dependencies
COPY go.mod go.sum ./
RUN go mod download

# Copy the source code
COPY . .

# Build the Go application
RUN go build -o main .

# Create a minimal image for running the application
FROM alpine:latest  
WORKDIR /app
COPY --from=builder /app/main .

# Set environment variables if needed
# ENV MONGODB_URI=mongodb://mongo:27017/blogDB

# Command to run the application
CMD ["./main"]
