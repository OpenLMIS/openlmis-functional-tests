pipeline {
  agent {
      node {
          label '!master'
      }
  }
  options {
    buildDiscarder(logRotator(numToKeepStr: '15', artifactNumToKeepStr: '15'))
    disableConcurrentBuilds()
  }
  environment {
    PATH = "/usr/local/bin:$PATH"
  }
  stages {
    stage('Deploy functional test ') {
        steps {
            build job: "OpenLMIS-3.x-deploy-to-functional-test", propagate: true, wait: true
        }
    }
    stage('Checkout openlmis config') {
        steps {
          dir('.openlmis-config') {
            git branch: 'master',
                credentialsId: 'OpenLMISConfigKey',
                url: 'git@github.com:villagereach/openlmis-config.git'
          }
        }
    }
    stage ('wait for test server') {
      steps {
        sh( script: "./wait-for-server.sh" )
      }
    }
    stage ('pull images') {
      steps {
        sh 'docker logout && docker-compose pull'
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
      emailext subject: "${env.JOB_NAME} - #${env.BUILD_NUMBER} ${env.STAGE_NAME} FAILED",
        body: """<p>${env.JOB_NAME} - #${env.BUILD_NUMBER} ${env.STAGE_NAME} FAILED</p><p>Check console <a href="${env.BUILD_URL}">output</a> to view the results.</p>""",
        recipientProviders: [[$class: 'CulpritsRecipientProvider'], [$class: 'DevelopersRecipientProvider']]
    }
    fixed {
      slackSend channel: '#build',
        color: 'good',
        message: "${env.JOB_NAME} - #${env.BUILD_NUMBER} Back to normal"
    }
    cleanup {
      sh 'docker-compose down -v'
      sh 'docker pull openlmis/stop-instance'
      sh '/usr/bin/docker run --rm --env-file ./.openlmis-config/functional-test.env openlmis/stop-instance'
      sh 'rm -Rf ./.openlmis-config'
    }
  }
}
