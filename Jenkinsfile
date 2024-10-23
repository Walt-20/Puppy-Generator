node {
    def client

    stage('Clone repository') {
        checkout scm
    }

    stage('Build image') {
        client = docker.build("puppy-generator-client", "./client")
    }
}