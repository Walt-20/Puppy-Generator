node {
    def client
    def server

    stage('Clone repository') {
        checkout scm
    }

    stage('Build Client image') {
        client = docker.build("puppy-generator-client", "./client")
    }

    stage('Build Server image') {
        server = docker.build("puppy-generator-server", "./server")
    }

    stage('Push Client image') {
        docker.withRegistry('https://hub.docker.com/repository/docker/wrwawra/puppy-generator/general', 'docker-hub-credentials') {
            client.push("latest")
        }
    }
}