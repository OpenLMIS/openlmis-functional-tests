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
      }
    }
  }
}
