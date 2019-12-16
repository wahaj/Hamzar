# Hamzar
A containerized docker E-Commerce web application developed using Django REST API for Backend and React using Material UI framework for the Frontend

## Frontend
The frontend is built upon the revered **React-JS** framework. The primary design library used is the **material-ui** addon library for React. The frontend pages are seved from a containerzied **Apache Nginx** server.

## Backend
A Django based application backend which serves as an API root for the project which is built upon the highly accredited **django-oscar**. 

>### API 
>**django-rest-framework** is used to serve the root API upon which all the calls from the frontend server are made. This API is built upon the **django-oscar-api** which is itself built upon **drf**. 


## Database
The database used for this project is postgresql which is run on the Google Cloud Managed Database instance. The preferred method of connection is through a reverse **cloudsql** proxy.


## Google Cloud Deployment
All of the three major services are containerized and run on seperate nodes within a cluster able to locally communicate among the services within the cluster. 

### Google Kubernetes Engine (GKE)
The GKE engine is set up to serve pages at https://www.hamzar.com which are served from a LoadBalancer which is allocated to a static IP and a valid SSL certificate.


##To Do List
To be updated
