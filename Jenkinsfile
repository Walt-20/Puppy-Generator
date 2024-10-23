pipeline {
    agent any

    stages {
        stage('Check Docker version') {
            steps {
                @echo 'checking docker version'
                sh 'docker --version'
            }
        }
    }
}