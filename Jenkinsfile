pipeline {
  agent any
  triggers {
    cron('H H/6 * * *')
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
        sh 'rm -Rf build/'
        sh 'docker-compose run funtest'
        sh 'docker-compose down -v'
        archiveArtifacts 'build/openlmis.har,build/errorShots/**,build/WDIO*.xml'
      }
    }
  }
  post {
    always {
      junit 'build/WDIO*.xml'
    }
  }
}
