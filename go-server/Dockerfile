# Use the official Go image to build the application
FROM golang:1.22 AS builder

# Set the working directory
WORKDIR /app

# Copy go.mod and go.sum
COPY go.mod go.sum ./
RUN go mod download

# Copy the source code
COPY . .

# Build the Go application
RUN go build -o main .

# Use a minimal base image to run the application
FROM alpine:latest  
WORKDIR /app
COPY --from=builder /app/main .

# Command to run the application
CMD ["./main"]
