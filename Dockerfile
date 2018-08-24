FROM node:8.11.2

COPY . /opt/blacklist
WORKDIR /opt/blacklist

RUN npm install --production

CMD [ "npm", "start" ]