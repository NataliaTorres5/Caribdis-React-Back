var express = require('express');
var router = express.Router(); //esto define un objeto se le define un metodo para quelo controle el controlador

const {create} = require('../controllers/blogController') //se saca el metodo del controlador que es un objeto  forma 1 me traigo solo 1 metodo de todo el controlador
/*
const blogsControler =require ('../controllers/blogController')  //me traigo todos los objetos 

const createController = blogsController.create 
const readController = blogsController.read
const updateController = blogsController.update// se trae del objeto todo solo saca el metodo read 
const destroyController = destroyController.update

/* GET blogs listing. */

//router.metodo(ruta del controlador )


router.post('/', create) 
console.log('/')

module.exports = router; //toca definir esta ruta hacia: index que es el enrutador principal que sería index
