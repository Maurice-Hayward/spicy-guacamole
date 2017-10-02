'use strict'

const Controller = require('trails/controller')

/**
 * @module GithubController
 * @description TODO document Controller.
 */
module.exports = class GithubController extends Controller {
  test(request, reply) {
    reply(this.app.services.GithubService.getAllRepoIssues('mikedeboer', 'node-github'))
  }
}
