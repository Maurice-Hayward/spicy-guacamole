/**
 * Routes Configuration
 * (trails.config.routes)
 *
 * Configure how routes map to views and controllers.
 *
 * @see http://trailsjs.io/doc/config/routes.js
 */

'use strict'

module.exports = [
  /*************************************************************
   * Server Rendered HTML Page Endpoints                        *
   *************************************************************/
  {
    method: 'GET',
    path: '/',
    handler: 'ViewController.helloWorld'
  },

  /*************************************************************
   * JSON API ENDPOINTS                                         *
   *************************************************************/
  {
    method: ['GET'],
    path: '/api/v1/default/info',
    handler: 'DefaultController.info'
  },

  {
    method: ['GET'],
    path: '/api/v1/github/sentiment/{owner}/{repo}',
    handler: 'GithubController.sentiment'
  }

  /*************************************************************
   *Static File  Endpoints                        *
   *************************************************************/
]
