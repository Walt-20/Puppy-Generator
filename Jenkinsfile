pipeline {
    agent any

    environment {
        DOCKER_HUB_CREDENTIALS = credentials('docker-hub-credentials')  // Add your Docker Hub credentials in Jenkins
        DOCKER_REPO = 'wrwawra/puppy-generator'
        FRONTEND_IMAGE = "${DOCKER_REPO}:puppy-generator-client"
        BACKEND_IMAGE = "${DOCKER_REPO}:puppy-generator-server"
    }

    stages {
        stage('Build Docker Images') {
            steps {
                script {
                    // Build frontend and backend images
                    sh 'docker build -t ${FRONTEND_IMAGE} ./frontend'
                    sh 'docker build -t ${BACKEND_IMAGE} ./backend'
                }
            }
        }

        stage('Push Images to Docker Hub') {
            steps {
                script {
                    // Login to Docker Hub
                    sh 'echo $DOCKER_HUB_CREDENTIALS_PSW | docker login -u $DOCKER_HUB_CREDENTIALS_USR --password-stdin'

                    // Push images
                    sh 'docker push ${FRONTEND_IMAGE}'
                    sh 'docker push ${BACKEND_IMAGE}'
                }
            }
        }

        stage('Deploy to Minikube') {
            steps {
                script {
                    // Apply Kubernetes manifests to deploy the containers
                    sh 'kubectl apply -f kube/'
                }
            }
        }

        stage('Verify Deployment') {
            steps {
                script {
                    // Verify that all pods are running
                    sh 'kubectl get pods'
                }
            }
        }
    }

    post {
        always {
            script {
                // Cleanup local Docker images to save space
                sh 'docker rmi ${FRONTEND_IMAGE} ${BACKEND_IMAGE} || true'
            }
        }
    }
}
