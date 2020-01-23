# Same as Travis
FROM node:10.13

# Arbitary root directory
WORKDIR /usr/src/app

# Gets the needed node setup file in place
COPY package*.json ./

# Installs and get node_modules ready
RUN npm install

# Copy the rest of the applicable files
COPY . .

# Keeps the container running
CMD tail -f /dev/null