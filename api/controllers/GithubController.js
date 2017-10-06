'use strict'

const Controller = require('trails/controller')
const _ = require('lodash')

/**
 * @module GithubController
 * @description TODO document Controller.
 */
module.exports = class GithubController extends Controller {
  async test(request, reply) {
    const owner = request.query.owner
    const repo = request.query.repo
    try {
      const issues = await this.app.services.GithubService.getAllRepoIssues(owner, repo)
      let issueSentimentResults = this.app.services.SentimentService.getAverageSentiment(issues)

      reply(_.extend({}, { owner, repo }, issueSentimentResults))
    } catch (e) {
      console.error(e)
    }
  }
}
