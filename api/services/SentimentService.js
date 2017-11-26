'use strict'

const Service = require('trails/service')

const sentiment = require('sentiment')

// Imports the Google Cloud client library
const language = require('@google-cloud/language')

// Instantiates a client
const client = new language.LanguageServiceClient()
/**
 * @module SentimentService
 * @description TODO document Service
 */
module.exports = class SentimentService extends Service {
  async getAverageSentiment(githubIssueList) {
    try {
      let totalSentiment = 0

      for (const issue of githubIssueList) {
        const document = {
          content: issue,
          type: 'PLAIN_TEXT'
        }

        const result = await client.analyzeSentiment({ document: document })
        const sentiment = result[0].documentSentiment

        const sentivalue = sentiment.score * sentiment.magnitude

        totalSentiment += sentivalue
      }

      const averageSentiment = totalSentiment / githubIssueList.length
    } catch (e) {
      console.error(e)
    }
    return { count: githubIssueList.length, averageSentiment }
  }
}
