//Importation 
const { urlencoded } = require('express');
const express = require('express');
var urlencodedParser = express.urlencoded({ extended: false })
//Importation du fichier controller
const controller_Information = require('../controllers/controller_Information');
//création du routeur Express pour ce module
const routeur = express.Router();
routeur.use(express.urlencoded());

//Définition des routes et des fonctions controller associées
routeur.get('/', controller_Information.All_Info);


//routeur.get('*', 404);


//Exportation du module routeur
module.exports = routeur 