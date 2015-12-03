var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('[{"id":"1", "name":"UCHealth"},{"id":"1", "name":"Wakeforest"}]');
});

module.exports = router;
