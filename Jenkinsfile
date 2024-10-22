pipeline {
    agent any

    environment {
        DOCKER_CREDENTIALS_ID = 'docker-hub-creds' // Credentials ID for Docker Hub
        DOCKER_REPO = 'wrwawra/puppy-generator'
    }

    stages {
        stage('Build Client Image') {
            steps {
                script {
                    docker.withRegistry('', DOCKER_CREDENTIALS_ID) {
                        // Building the client image from the 'client' directory
                        def clientImage = docker.build("${DOCKER_REPO}-client:latest", './client')
                        clientImage.push('latest')
                        clientImage.push("${env.BUILD_NUMBER}")
                    }
                }
            }
        }

        stage('Build Server Image') {
            steps {
                script {
                    docker.withRegistry('', DOCKER_CREDENTIALS_ID) {
                        // Building the server image from the 'server' directory
                        def serverImage = docker.build("${DOCKER_REPO}-server:latest", './server')
                        serverImage.push('latest')
                        serverImage.push("${env.BUILD_NUMBER}")
                    }
                }
            }
        }
    }
}
