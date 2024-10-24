pipeline {
    agent any

    stages {
        stage('Clone repository') {
            steps {
                checkout scm
            }
        }

        stage('Build and Push Client image') {
            steps {
                script {
                    client = docker.build("wrwawra/puppy-generator:puppy-generator-client", "./client")
                    docker.withRegistry('https://index.docker.io/v1/', 'docker-hub-credentials') {
                        client.push("puppy-generator-client")
                    }
                }
            }
        }

        stage('Test Client image') {
            steps {
                dir('./client') {
                    sh 'npm install' // Install dependencies
                    sh 'npm test -- --reporters=default --reporters="jest-junit"' // Run tests with Jest
                }
            }
        }
    }
    // stage('Build and Push Server image') {
    //     server = docker.build("wrwawra/puppy-generator:puppy-generator-server", "./server")

    //     docker.withRegistry('https://index.docker.io/v1/', 'docker-hub-credentials') {
    //         server.push("puppy-generator-server")
    //     }
    // }

}