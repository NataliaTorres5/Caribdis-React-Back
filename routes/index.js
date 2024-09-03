var express = require('express');
var router = express.Router();

const blogsRouter =require('./blogs') //se esta requiriendo las rutas particulares con la /se llama tods las rutas definidas dentro del enrutador
const usersRouter =require('./users')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Caribdis Ecommerce'});
});

//se define otra ruta 
router.use('/blogs', blogsRouter)
router.use('/users', usersRouter)



module.exports = router; //enrutador principal de la app que tiene que usar todos los controladres
