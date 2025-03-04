# Use an official Node.js runtime as a parent image
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Use a lightweight Node.js image for the final stage
FROM node:18-alpine AS runner

# Set working directory
WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app/.next .next
COPY --from=builder /app/.env .env
COPY --from=builder /app/package.json package.json
COPY --from=builder /app/node_modules node_modules

# Expose port (default Next.js port)
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]