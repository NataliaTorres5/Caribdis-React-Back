var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json();
});



module.exports = router;

/*
En el caso de que se detecte que el id no existe se debe poner un aviso de esta manera

router.get('/', function(req, res, next) {
 if  (req.params.id )  {
 res.status(404).json() 
 } 
 res.json({
 id : req.para,s.id });
});
 */ 