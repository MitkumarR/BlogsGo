# Use the official Go image to build the application
FROM golang:1.22 AS builder

# Set the working directory
WORKDIR /app

# Copy go.mod and go.sum to download dependencies
COPY go.mod go.sum ./
RUN go mod download

# Copy the source code
COPY . .

# Cross-compile the Go application for Linux, disabling CGO
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o main .

# Use a minimal base image to run the application
FROM alpine:latest
WORKDIR /app

# Copy the Go binary from the builder stage
COPY --from=builder /app/main .

# Copy .env file to the container
COPY --from=builder /app/.env .

# Ensure the binary has executable permissions
RUN chmod +x ./main

# Expose the port for the Go server
EXPOSE 3001

# Command to run the application
CMD ["./main"]
