# Use the official Node.js image with tag 18
FROM node:20

# Set the working directory inside the container
WORKDIR /app


# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

ENV NEXT_PUBLIC_API_BASE=http://backend:5000

# Copy the rest of the application code to the working directory
COPY . .

RUN npm i sharp

# Build the Next.js app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
