var express = require('express');
var router = express.Router();  

const {create} = require('../controllers/userController')//esto define un objeto se le define un metodo para qu elo controle el controlador


router.post('/', create) 

module.exports = router;
