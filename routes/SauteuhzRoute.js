//Importation 
const { urlencoded } = require('express');
const express = require('express');
var urlencodedParser = express.urlencoded({ extended: false })
//Importation du fichier controller
const SauteuhzController = require('../controllers/SauteuhzController');
//création du routeur Express pour ce module
const routeur = express.Router();
routeur.use(express.urlencoded());

//Définition des routes et des fonctions controller associées
routeur.get('/', SauteuhzController.Sauteuhz_accueil);

routeur.get('/testchart', SauteuhzController.Chart_affichage);

routeur.get('/listeClients/', SauteuhzController.Clients_affichage);

routeur.get('/detailClient', SauteuhzController.Clients_detail);
 
routeur.get('/listeMedocs/', SauteuhzController.Medocs_affichage);

routeur.get('/detailMedoc/', SauteuhzController.Medocs_detail);

routeur.get('/ajouterClient/', SauteuhzController.Ajouter_Client);
routeur.get('/addClient', SauteuhzController.Add_Client);

routeur.get('/deleteClient', SauteuhzController.Delete_Client);

routeur.get('/ajouterMedoc/', SauteuhzController.Ajouter_Medoc);
routeur.get('/addMedoc', SauteuhzController.Add_Medoc);

routeur.get('/deleteMedoc', SauteuhzController.Delete_Medoc);

routeur.get('/updatestock', SauteuhzController.Medocs_update_stock);
routeur.get('/updatebesoin', SauteuhzController.Medocs_update_besoin);

routeur.get('/connexion', SauteuhzController.Compte_connection);
routeur.post('/connect', SauteuhzController.Compte_connect);
//routeur.get('*', 404);


//Exportation du module routeur
module.exports = routeur 