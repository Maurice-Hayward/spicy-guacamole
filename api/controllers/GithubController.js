'use strict'

const Controller = require('trails/controller')
const _ = require('lodash')

/**
 * @module GithubController
 * @description TODO document Controller.
 */
module.exports = class GithubController extends Controller {
  async sentiment(request, reply) {
    try {
      const owner = request.params.owner
      const repo = request.params.repo

      const issues = await this.app.services.GithubService.getAllRepoIssues(owner, repo)
      let issueSentimentResults = await this.app.services.SentimentService.getAverageSentiment(
        issues
      )

      reply(_.extend({}, { owner, repo }, issueSentimentResults))
    } catch (e) {
      console.error(e)
    }
  }
}
