var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    db.q("SELECT * FROM iq_unit_mstr", {}, function (err, units) {
        if(err){
            console.log(err);
            res.send('Error!!');
        } else {
            res.send(units);
        }
    });
  //res.send('[{"id":"1", "name":"UCHealth"},{"id":"1", "name":"Wakeforest"}]');
});

module.exports = router;
