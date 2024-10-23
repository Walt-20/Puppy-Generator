node {
    def client
    def server

    stage('Clone repository') {
        checkout scm
    }

    stage('Build and Push Client image') {
        client = docker.build("puppy-generator-client", 'docker-hub-credentials', "./client")
        client.push('wrwawra/puppy-generator:puppy-generator-client')
    }

    // stage('Build Server image') {
    //     server = docker.build("puppy-generator-server", "./server")
    // }
}