FROM node:10
RUN npm i --global lerna typescript @nestjs/cli
WORKDIR /usr/src
CMD ["/bin/bash"]