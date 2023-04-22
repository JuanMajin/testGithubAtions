FROM node:14

WORKDIR /tallergithubactions

COPY package*.json ./

RUN npm install 

COPY . .

CMD [ "echo", "Es una imagen" ]