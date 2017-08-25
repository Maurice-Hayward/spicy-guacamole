'use strict'

const GitHubApi = require('github')

module.exports = new GitHubApi({
  // optional
  debug: true,
  Promise: require('bluebird')
})
