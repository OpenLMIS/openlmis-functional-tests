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
      agent none
        steps {
            build job: "OpenLMIS-3.x-deploy-to-functional-test", propagate: true, wait: true
        }
    }
    stage ('build') {
      steps {
        dir('.openlmis-config') {
          git branch: 'master',
              credentialsId: 'OpenLMISConfigKey',
              url: 'git@github.com:villagereach/openlmis-config.git'
        }
        sh( script: "./ci-runTest.sh")
        archiveArtifacts 'build/openlmis.har*,build/errorShots/**,build/WDIO*.xml,build/recordings/**,build/consolelogs/**,build/performanceResults/**'
      }
      post {
        always {
          junit 'build/WDIO*.xml'
        }
        cleanup {
          sh 'docker pull openlmis/stop-instance'
          sh 'docker run --rm --env-file ./.openlmis-config/functional-test.env openlmis/stop-instance'
          sh 'rm -Rf .openlmis-config'
        }
      }
    }
  }
  post {
    always {
        sh 'cp -vr resources/assets/ build/performanceResults/'
        sh 'node node_modules/htmlify-csv convert build/performanceResults/StepPerformanceResults.csv --output=build/performanceResults/StepPerformanceResults.html'
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
  }
}
