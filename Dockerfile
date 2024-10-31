# Use the official Jenkins LTS image
FROM jenkins/jenkins:lts

# Switch to root to install Node.js
USER root

# Install Node.js (version 20)
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs

# Install any other dependencies, if needed
# For example, you might need to install Git
RUN apt-get update && apt-get install -y git

# Switch back to Jenkins user
USER jenkins

# Set the working directory
WORKDIR /var/jenkins_home

# Expose Jenkins port
EXPOSE 8080
