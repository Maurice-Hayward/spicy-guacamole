"use strict";

const Service = require("trails/service");

const sentiment = require("sentiment");

// Imports the Google Cloud client library
const language = require("@google-cloud/language");

// Instantiates a client
const client = new language.LanguageServiceClient();
/**
 * @module SentimentService
 * @description TODO document Service
 */
module.exports = class SentimentService extends Service {
  async getAverageSentiment(githubIssues) {
    try {
      let githubIssuesPromises = githubIssues.map(issue => {
        const document = {
          content: issue,
          type: "PLAIN_TEXT"
        };
        return client.analyzeSentiment({ document: document });
      });

      let results = await Promise.all(githubIssuesPromises);

      let count = results.length;

      let averageSentiment = results.reduce((average, result) => {
        const sentiment = result[0].documentSentiment;
        const sentivalue = sentiment.score * sentiment.magnitude;
        return average + sentivalue / githubIssues.length;
      }, 0);

      return { count, averageSentiment };
    } catch (e) {
      console.error(e);
    }
  }
};
