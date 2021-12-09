FROM postgres:12.9-alpine
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json", "./"]
RUN npm install
COPY . .
ENV PORT=5432
EXPOSE 5432
ENV PGUSER= PGPASSWORD=

