# Build

FROM node:alpine
WORKDIR /frontend
COPY package.json ./
RUN npm install
COPY . ./

RUN npm run-script build



# Serve

FROM nginx:alpine
COPY --from=0 /frontend/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
