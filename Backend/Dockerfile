# Use the official Node.js image with tag 18
FROM node:18.17

# Set the working directory inside the container
WORKDIR /app

ENV PORT=5000

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port specified in the environment variable
EXPOSE $PORT

# Start the backend application (uses package.json script)
CMD ["npm", "run", "start"]
