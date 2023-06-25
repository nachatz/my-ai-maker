# Use a multi-stage build for efficiency
FROM golang:1.16-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy the source code into the container
COPY . .

# Build the Go application
RUN apk --no-cache add git
RUN CGO_ENABLED=0 make build .

# Use a minimal base image for the final container
FROM alpine:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the built executable from the previous stage
COPY --from=builder /app/my-ai-maker .

EXPOSE 8080
ENTRYPOINT ["./my-ai-maker"]
CMD ["main.go"]

