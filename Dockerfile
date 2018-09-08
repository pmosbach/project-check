FROM node:carbon-alpine

LABEL org.label-schema.vcs-url="https://github.com/pmosbach/project-check"

RUN apk add --no-cache git && \
    npm install -g jest && \
    mkdir /jest

WORKDIR /jest

COPY repostructure.test.js jest.config.json package.json package-lock.json /jest/

RUN npm install

# This is intended to be a sane fallback, but you should override this via your .gitlab-ci.yml
CMD ["--config","/jest/jest.config.json","/jest/"]
ENTRYPOINT ["jest"]