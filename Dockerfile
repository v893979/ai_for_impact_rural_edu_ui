# Use a Node.js base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the application will run on
EXPOSE 3000

# Make craco executable
RUN chmod +x ./node_modules/.bin/craco 

# Start the application
CMD ["npm", "start"]