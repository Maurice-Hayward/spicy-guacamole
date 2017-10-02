'use strict'

const Service = require('trails/service')

const sentiment = require('sentiment')

/**
 * @module SentimentService
 * @description TODO document Service
 */
module.exports = class SentimentService extends Service {
  getAverageSentiment(githubIssueList) {
    const averageSentiment = githubIssueList.reduce((total, issue, index, array) => {
      const sentivalue = sentiment(issue).score
      total += sentivalue
      return total / array.length
    }, 0)

    return { count: githubIssueList.length, averageSentiment }
  }
}
