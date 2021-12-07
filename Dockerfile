FROM node:14.17.4

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .
# RUN NODE_OPTIONS="--max_old_space_size=8192 --optimize_for_size --max_executable_size=4096 --stack_size=4096"
RUN npm install

RUN npm rebuild node-sass

EXPOSE 3000
 
CMD [ "npm", "start" ]
