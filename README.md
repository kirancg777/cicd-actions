# CI/CD using Actions and deploying using Minikube Kubernetes Cluster
# Steps
1.To set up a GitHub Actions CI/CD workflow for a Node.js app using Docker and a Minikube Kubernetes cluster, you can follow these steps:
Set up Minikube: 
2.Install Minikube on your development machine and start the cluster. Minikube allows you to run a local Kubernetes cluster for development and testing purposes.
3.Create a Dockerfile: Create a Dockerfile in the root directory of your Node.js application. The Dockerfile describes the steps to build a Docker image for your app. Here's an example Dockerfile for a Node.js app:
