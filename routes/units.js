var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('mysql://iqueue_u:iqueue_p@$sw0rD@localhost:3306/iqueue_uchealth');

//importing models
var unit = sequelize.import("../../../model/unitDo")


/* GET units listing. */
router.get('/', function(req, res, next) {
    unit.findAll().then(function(units) {
      // unit will be the first entry of the Units table with the title 'UC Health' || null
      res.send(units);
    }).catch(function(err){
        console.log(err);
        res.send('Error!!');
    });
   /* db.q("SELECT * FROM iq_unit_mstr", {}, function (err, units) {
        if(err){
            console.log(err);
            res.send('Error!!');
        } else {
            res.send(units);
        }
    });*/
  //res.send('[{"id":"1", "name":"UCHealth"},{"id":"1", "name":"Wakeforest"}]');
});

router.get('/:unitId', function(req, res, next) {

    unit.findOne({ where: {id: req.params.unitId} }).then(function(unit) {
      // unit will be the first entry of the Units table with the title 'UC Health' || null
      res.send(unit);
    }).catch(function(err){
        console.log(err);
        res.send('Error!!');
    });

    /*db.q("SELECT * FROM iq_unit_mstr where iq_unit_mstr_id = ?", [req.params.unitId], function (err, unit) {
        if(err){
            console.log(err);
            res.send('Error!!');
        } else {
            res.send(unit);
        }
    });*/
  //res.send('[{"id":"1", "name":"UCHealth"},{"id":"1", "name":"Wakeforest"}]');
});

module.exports = router;
