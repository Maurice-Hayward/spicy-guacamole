'use strict'

const assert = require('assert')
const sinon = require('sinon')

const github = require('../../../lib/index').GithubClient
const Promise = require('bluebird')

describe('GithubService', () => {
  let GithubService
  let sandbox

  beforeEach(() => {
    sandbox = sinon.sandbox.create()
  })

  afterEach(() => {
    sandbox = sinon.sandbox.restore()
  })

  it('should exist', () => {
    GithubService = global.app.services.GithubService
    assert(global.app.services.GithubService)
  })

  it('should get empty list for a repo with no issues ', done => {
    let mockdata = { data: [] }

    sandbox.stub(github.issues, 'getForRepo').resolves(mockdata)
    sandbox.stub(github, 'hasNextPage').returns(false)

    GithubService.getAllRepoIssues('maurice-hayward', 'spicy-guacamole')
      .then(function(result) {
        assert.deepEqual(result, [])
        done()
      })
      .catch(done)
  })
})
