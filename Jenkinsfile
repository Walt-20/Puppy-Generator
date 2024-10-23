node {
    def client

    stage('Clone repository') {
        checkout scm
    }

    stage('Build Client image') {
        client = docker.build("puppy-generator-client", "./client")
    }

    stage('Build Server image') {
        client = docker.build("puppy-generator-server", "./server")
    }
}