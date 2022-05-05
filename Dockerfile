# Build the Angular application
FROM node:16.15.0-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM tomcat
COPY --from=build /app/dist/student-survey-form /usr/local/tomcat/webapps/student-survey

