'use strict'

const Service = require('trails/service')

const github = require('../../lib/index').GithubClient

/**
 * @module GithubService
 * @description get Github data
 */

module.exports = class GithubService extends Service {
  async getAllRepoIssues(owner, repo) {
    let issues = []
    let res = await github.issues.getForRepo({ owner, repo, state: 'all' })
    issues.push(...res.data)
    while (github.hasNextPage(res)) {
      res = await github.getNextPage(res)
      issues.push(...res.data)
    }

    console.log(issues)
  }
}
