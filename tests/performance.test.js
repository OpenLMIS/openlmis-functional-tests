import { expect } from 'chai'
import LoginPage from '../src/pages/login.page';
import HomePage from '../src/pages/home.page';

let metrics, score

describe('My Performance Test', () => {
    before(() => {
        browser.enablePerformanceAudits()
        LoginPage.open()
        LoginPage.username = "administrator";
        LoginPage.password = "password";
    })

    it('should not increase firstMeaningfulPaint limit', () => {
        let metrics = browser.getMetrics()
        let score = browser.getPerformanceScore()
        console.log('metrics.speedIndex', metrics.speedIndex);
        console.log('score open1', score);
        console.log('metrics open', metrics);

        LoginPage.clickSubmit()
        //HomePage.waitForIsVisible()

        metrics = browser.getMetrics()
        score = browser.getPerformanceScore()
        console.log('metrics.speedIndex2', metrics.speedIndex);
        console.log('score open2', score);
        console.log('metrics open2', metrics);

        expect(metrics.firstMeaningfulPaint).to.be.below(3 * 1000) // 3 seconds
    })

    it('should not increase firstgbgtrh', () => {
        let metrics = browser.getMetrics()
        let score = browser.getPerformanceScore()
        console.log('metrics.speedIndex222', metrics.speedIndex);
        console.log('score open1222', score);
        console.log('metrics open222', metrics);

        //HomePage.waitForIsVisible()
        HomePage.clickLogout()
        //LoginPage.waitForIsVisible()

        metrics = browser.getMetrics()
        score = browser.getPerformanceScore()
        console.log('metrics.speedIndex2333', metrics.speedIndex);
        console.log('score open2333', score);
        console.log('metrics open2333', metrics);

        expect(metrics.firstMeaningfulPaint).to.be.below(3 * 1000) // 3 seconds
    })
})
