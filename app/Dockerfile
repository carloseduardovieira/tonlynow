FROM node:14-alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
RUN npm install -g @ionic/cli
RUN npm install -g @angular/cli@latest
COPY . .
EXPOSE 4200
CMD ["npm", "start"]