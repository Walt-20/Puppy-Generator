node {
    def client
    def server

    stage('Clone repository') {
        checkout scm
    }

    stage('Build and Push Client image') {
        client = docker.build("wrwawra/puppy-generator:puppy-generator-client", "./client")

        docker.withRegistry('https://index.docker.io/v1/', 'docker-hub-credentials') {
            client.push("puppy-generator-client")
        }
    }

    stage('Test Client image') {
        steps {
            dir('./client') {
                sh 'npm install'
                sh 'npm test -- --reporters=default --reporters="jest-junit"'
            }
        }
    }

    stage('Build and Push Server image') {
        server = docker.build("wrwawra/puppy-generator:puppy-generator-server", "./server")

        docker.withRegistry('https://index.docker.io/v1/', 'docker-hub-credentials') {
            server.push("puppy-generator-server")
        }
    }

}