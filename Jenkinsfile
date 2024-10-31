pipeline {
    agent {
        docker {
            image 'node:20'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }

    stages {
        stage('Check Docker Socket') {
            steps {
                script {
                    // Check if Docker commands can be executed
                    sh 'docker ps'  // This should list running containers
                }
            }
        }

        stage('Build and Push Client image') {
            steps {
                script {
                    client = docker.build("wrwawra/puppy-generator:puppy-generator-client", "./client")
                }
            }
        }

        stage('Test Client image') {
            steps {
                dir('./client') {
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