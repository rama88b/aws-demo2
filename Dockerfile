# Use the official Node.js image as a base
FROM node:12.4

# Set the working directory inside the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed dependencies
RUN npm install

# Make port 9000 available to the world outside this container
EXPOSE 9000

# Run server.js using Node.js
CMD ["node", "server.js"]
