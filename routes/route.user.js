//Importation 
const { urlencoded } = require('express');
const express = require('express');
var urlencodedParser = express.urlencoded({ extended: false })
//Importation du fichier controller
const SauteuhzController = require('../controllers/SauteuhzController');
//création du routeur Express pour ce module
const routeur = express.Router();
routeur.use(express.urlencoded());







module.exports = routeur;