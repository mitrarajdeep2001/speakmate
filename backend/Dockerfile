    # Use a Node.js base image
    FROM node:alpine

    # Set the working directory inside the container
    WORKDIR /app

    # Copy package.json and package-lock.json (or yarn.lock)
    COPY package*.json ./

    # Install dependencies
    RUN npm install

    # Copy the rest of the application code
    COPY . .

    # Build the React app for production (optional, for production builds)
    # RUN npm run build

    # Expose the port your node app runs on (default is 5000)
    EXPOSE 5000

    # Command to run the development server or serve the build
    CMD ["npm", "run", "start"]
