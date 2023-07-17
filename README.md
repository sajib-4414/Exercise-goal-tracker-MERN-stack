# Exercise Goal tracker

Exercise Goal tracker built witn MERN full stack and AWS CI/CD with AWS Elastic Kubernetes Service deployment.

## Description

This repository contains the source code and documentation for the Exercise Goal tracker application. The application is built with the MERN (MongoDB, Express, React, Node.js) full stack, and it provides functionalities for managing exercise goals. Following functionalities are supported till now.
- Login functionality
- Signup functionality
- Create, update, and delete exercise goals
- Support for day-wise, week-wise, and monthly goals
- Summary stats for completed goals


## Table of Contents

-   [Features](https://github.com/sajib-4414/Exercise-goal-tracker-MERN-stack/blob/master/README.md#features)
-   [Tech Stack](https://github.com/sajib-4414/Exercise-goal-tracker-MERN-stack/blob/master/README.md#tech-stack)
    -   [Development](https://github.com/sajib-4414/Exercise-goal-tracker-MERN-stack/blob/master/README.md#development)
    -   [Deployment](https://github.com/sajib-4414/Exercise-goal-tracker-MERN-stack/blob/master/README.md#deployment)
-   [Setup](https://github.com/sajib-4414/Exercise-goal-tracker-MERN-stack/blob/master/README.md#setup)
-   [Usage](https://github.com/sajib-4414/Exercise-goal-tracker-MERN-stack/blob/master/README.md#usage)
-   [CI/CD](https://github.com/sajib-4414/Exercise-goal-tracker-MERN-stack/blob/master/README.md#cicd)
-   [Monitoring](https://github.com/sajib-4414/Exercise-goal-tracker-MERN-stack/blob/master/README.md#monitoring)

## Features

The Project Name application includes the following features:

-   User registration and authentication: Users can sign up and log in to the application.
-   Create, update, and delete exercise goals: Users can set exercise goals on a daily, weekly, or monthly basis and modify them as needed.
-   Summary statistics: The application provides a summary of completed exercise goals.
## API Endpoints

- `/api/users/login` - Endpoint for user login.
- `/api/users/` - Endpoint for user register.
- `/api/goals` - Endpoint for managing exercise goals.
## Tech Stack

### Development

The following technologies are used in the development of the Project Name application:

-   MongoDB: The application uses MongoDB Cloud Atlas as the Cloud database.
-   Mongoose: Mongoose is used as the Object Data Modeling (ODM) layer for MongoDB.
-   Node.js and Express: Node.js and Express are used for the backend implementation.
-   React: The frontend is built with React.
-   Redux : Redux Toolkit is used for state management. Redux Flow is used to optimize component communication.

### Deployment



The deployment process involves the following steps:

1.  Docker Environment: The application is fully dockerized and includes separate Dockerfiles for production and development environments. The production Dockerfile focuses on building a compressed and optimized build for deployment.
2.  CI/CD and Codebuild: The code is set up with Continuous Integration and Continuous Deployment (CI/CD) using AWS CodeBuild.
3.  Deployment to AWS EKS: The application is deployed to an AWS EKS Kubernetes cluster.
4.  Domain setup: The application is configured to be browsed from a given domain using Route53 and a Hosted Zone.
5.  Prometheus Metrics: Monitoring and collecting metrics from the cluster.
6.  Grafana Dashboard: Visualization of metrics for cluster monitoring.

## Setup

To set up the Project Name application locally, follow these steps:

1.  Clone the repository: **git clone \<repository-url\>**
2.  Install dependencies:
    -   For the backend and frontend development environment, navigate to the **dockerfiles/development** directory and run **docker compose up**.
    -   For the backend and frontend development environment, navigate to the **dockerfiles/production** directory and run **docker compose up**.
3.  Configure environment variables:
    -   Create a **.env** file in the **backend** directory and provide the necessary environment variables.
    -   Create a **.env** file in the **frontend** directory and provide the necessary environment variables.
4.  Start the development servers:
   
   If you are now using the docker, then start the environment by npm start. if using docker, with the `docker compose up` the environment should be up and running.
   
    -   For the backend, navigate to the **backend** directory and run **npm run start**.
    -   For the frontend, navigate to the **frontend** directory and run **npm run start**.

## Usage

Once the Project Name application is set up and running, you can access it through your web browser. Use the provided functionality to register, log in, and manage exercise goals. Explore the application to create, update, and delete exercise goals based on your preferred timeframe (daily, weekly, or monthly). The summary statistics will display completed goals.

## CI/CD

The Project Name application is set up with CI/CD using AWS CodeBuild. Whenever code changes are pushed to the repository, CodeBuild automatically triggers the build and deployment process. The CI/CD pipeline ensures that the latest changes are deployed to the AWS EKS Kubernetes cluster.

## Monitoring

The application includes monitoring capabilities using Prometheus metrics and a Grafana dashboard. These tools allow you to monitor the AWS EKS Kubernetes cluster and gain insights into its performance and health.

Please refer to the documentation for more details on the setup and usage of the monitoring features.

Top of Form

### features to be added
- Deployment on AWS EKS with CI/CD - in progress
- Oauth2 authentication with social login
- Elastic Search for searching
- GraphQL
