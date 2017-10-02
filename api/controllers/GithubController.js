'use strict'

const Controller = require('trails/controller')

/**
 * @module GithubController
 * @description TODO document Controller.
 */
module.exports = class GithubController extends Controller {
  async test(request, reply) {
    try {
      const issues = await this.app.services.GithubService.getAllRepoIssues('nodejs', 'node')
      let result = this.app.services.SentimentService.getAverageSentiment(issues)
      reply(result)
    } catch (e) {
      console.error(e)
    }
  }
}
