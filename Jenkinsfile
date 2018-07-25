pipeline {
  agent any
  options {
    buildDiscarder(logRotator(numToKeepStr: '15', artifactNumToKeepStr: '15'))
  }
  environment {
    PATH = "/usr/local/bin:$PATH"
  }
  stages {
    stage ('pull images') {
      steps {
        sh 'docker-compose pull'
      }
    }
    stage ('build') {
      steps {
        sh 'docker-compose run --no-deps funtest -c \'yarn clean\''
        sh 'docker-compose run funtest'
        sh 'docker-compose down -v'
        archiveArtifacts 'build/openlmis.har*,build/errorShots/**,build/WDIO*.xml'
      }
    }
  }
  post {
    always {
      junit 'build/WDIO*.xml'
    }
    unstable {
      slackSend channel: '#build',
        color: 'danger',
        message: "${env.JOB_NAME} - #${env.BUILD_NUMBER} FAILED (<${env.BUILD_URL}|Open>)"
    }
    fixed {
      slackSend channel: '#build',
        color: 'good',
        message: "${env.JOB_NAME} - #${env.BUILD_NUMBER} Back to normal"
    }
  }
}
