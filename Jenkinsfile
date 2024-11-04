pipeline {
    agent any

    stages {
        stage('Check Node Version') {
            steps {
                script {
                    // Check if Docker commands can be executed
                    sh 'node --version'  // This should list running containers
                }
            }
        }
        
        stage('Test Client image') {
            steps {
                dir('./client') {
                    sh 'npm install'
                    sh 'npm test -- --reporters=default --reporters="jest-junit"' // Run tests with Jest
                }
            }
        }

        stage('Build Client Docker Image') {
            steps {
                script {
                    client = docker.build("wrwawra/puppy-generator:puppy-generator-client", "./client")
                }
            }
        }

        stage('Push Client Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'DOCKER_CREDS') {
                        client.push("latest")
                    }
                }
            }
        }

        stage('Build Server Docker Image') {
            steps {
                script {
                    server = docker.build("wrwawra/puppy-generator:puppy-generator-server", "./server")
                }
            }
        }

        stage('Push Server Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'DOCKER_CREDS') {
                        server.push("latest")
                    }
                }
            }
        }

    }
}