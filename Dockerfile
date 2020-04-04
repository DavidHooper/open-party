FROM node:10
RUN npm i --global lerna typescript
WORKDIR /usr/src
CMD ["/bin/bash"]