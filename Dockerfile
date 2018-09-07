FROM node:carbon-alpine

LABEL org.label-schema.vcs-url="https://github.com/pmosbach/project-check"

RUN npm install -g jest jest-html-reporter glob git-commit-count

WORKDIR /jest

COPY repostructure.test.js jest.config.json ./

# This is intended to be a sane fallback, but you should override this via your .gitlab-ci.yml
CMD ["/jest/*.js","--config","/jest/jest.config.json",]
ENTRYPOINT ["jest"]