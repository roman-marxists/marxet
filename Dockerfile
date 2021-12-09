FROM postgres:12.9-alpine
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json", "./"]
RUN npm install
COPY . .
ENV POSTGRES_PASSWORD=mysecretpassword
BASH []