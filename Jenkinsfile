node {
    def client
    def server

    stage('Clone repository') {
        checkout scm
    }

    stage('Build and Push Client image') {
        client = docker.build("wrwawra/puppy-generator:puppy-generator-client", "./client")

        docker.withRegistry('https://index.docker.io/v1/', 'docker-hub-credentials') {
            client.push("latest")
            client.push("1122")
        }
    }

    // stage('Build Server image') {
    //     server = docker.build("puppy-generator-server", "./server")
    // }
}