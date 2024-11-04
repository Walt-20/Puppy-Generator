pipeline {
    agent any

    environment {
        DOCKER_CREDENTIALS = 'DOCKER_CREDS'
    }

    stages {
        stage('Check Node Version') {
            steps {
                script {
                    // Check if Docker commands can be executed
                    sh 'node --version'  // This should list running containers
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    client = docker.build("wrwawra/puppy-generator:puppy-generator-client", "./client")
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', DOCKER_CREDENTIALS)
                }
            }
        }

        // stage('Test Client image') {
        //     steps {
        //         dir('./client') {
        //             sh 'npm test -- --reporters=default --reporters="jest-junit"' // Run tests with Jest
        //         }
        //     }
        // }
    }
    // stage('Build and Push Server image') {
    //     server = docker.build("wrwawra/puppy-generator:puppy-generator-server", "./server")

    //     docker.withRegistry('https://index.docker.io/v1/', 'docker-hub-credentials') {
    //         server.push("puppy-generator-server")
    //     }
    // }

}