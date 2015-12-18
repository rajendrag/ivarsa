"use strict"
var express = require('express');
var proxy = require('express-http-proxy');
var router = express.Router();
var console = require('console');

/* Forward the request to backend server
 * TODO: Get the proxy host from configuration,
 * TODO: Validate if the request is authenticated using a filter
 */
router.get('/*', function(req, res, next) {
    var requrl = "localhost";
    proxy("localhost:9000", {
                      forwardPath: function(req, res) {
                        return require('url').parse(req.url).path;
                      }
                    })(req, res, next);

});
module.exports = router;