FROM node:alpine

ENV REACT_APP_TITLE="React Auth Page demo"
ENV REACT_APP_SUBTITLE="Sign in to start your session"
ENV REACT_APP_USER_CREDENTIALS_ENABLED=true
ENV REACT_APP_OAUTH_AUTH_URL="https://react-auth-page.eu.auth0.com/auth"
ENV REACT_APP_OAUTH_TOKEN_URL="https://react-auth-page.eu.auth0.com/oauth/token"
ENV REACT_APP_OAUTH_REDIRECT_URL="http://localhost:3000/secret-page.html"
ENV REACT_APP_OAUTH_CLIENT_ID=""
ENV REACT_APP_OAUTH_SCOPE="email"
ENV REACT_APP_OAUTH_AUDIENCE="https://react-auth-page.eu.auth0.com/userinfo"

COPY ./build /code

WORKDIR /code

RUN npm install -g serve && chmod +x entrypoint.sh

ENTRYPOINT ["sh","entrypoint.sh"]