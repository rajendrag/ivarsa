var express = require('express');
var router = express.Router();
//importing models
var models = require('../models');
var UnitDAO = models.Unit;


/* GET units listing. */
router.get('/', function(req, res, next) {
  UnitDAO.findAll().then(function(units) {
    res.send(units);
  }).catch(function(err) {
    console.log(err);
    res.send('Error!!');
  });
});

router.get('/:unitId', function(req, res, next) {

  UnitDAO.findOne({
    where: {
      id: req.params.unitId
    },
    include: [models.UnitOpHours]
  }).then(function(unit) {
    res.send(unit);
  }).catch(function(err) {
    console.log(err);
    res.send('Error!!');
  });
});

module.exports = router;