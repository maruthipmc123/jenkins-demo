// Jenkinsfile
pipeline {
    agent any
    tools {
        nodejs 'NodeJS-16'
    }
    stages {
        stage('Cleanup Workspace') {
            steps {
                echo 'Cleaning the workspace...'
                cleanWs()
            }
        }

        stage('Checkout from Git') {
            steps {
                // git url: "https://github.com/maruthipmc123/jenkins-demo.git", branch: 'main'
                // echo 'Code successfully checked out.'
                
                // DIAGNOSTIC STEP 1: Prove the lock file exists after checkout
                echo 'Verifying checked out files...'
                sh 'ls -la' 
            }
        }

        stage('Install Dependencies') {
            steps {
                // THE FIX: Use 'npm ci' for a clean, reliable install
                echo 'Installing dependencies using npm ci...'
                sh 'npm ci'
                
                // DIAGNOSTIC STEP 2: Check for the file that Jest says is missing
                echo 'Verifying jest-circus installation...'
                // This command will succeed if the file exists, and fail if it does not.
                sh 'ls -l node_modules/jest-circus/build/runner.js'
            }
        }

        stage('Run Unit Tests') {
            steps {
                echo 'Running unit tests...'
                sh 'npm test'
            }
        }
    }
    post {
        always {
            echo 'Build finished.'
        }
        // ... rest of post block
    }
}
