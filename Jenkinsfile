pipeline {
  agent any
  triggers {
    cron('H H/6 * * *')
  }
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
        message: "Attention @here ${env.JOB_NAME} #${env.BUILD_NUMBER} has failed"
    }
  }
}
