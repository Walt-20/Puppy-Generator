pipeline {
    agent any

    stages {
        stage('Check Docker version') {
            steps {
                echo 'checking docker version'
                sh 'docker --version'
            }
        }

        stage('Build Client docker image') {
            steps {
                sh 'cd ./clent && docker build -t puppy-generator-client:v1 .'
            }
        }
    }
}