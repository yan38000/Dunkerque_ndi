//Importation de la connexion à la bdd
const bodyParser = require('body-parser');
const iniparser = require('iniparser');
var db = require('../database');
const model_Information = require('../models/model_Information');
//Importation du fichier models

//Exportation des fonctions du controller
module.exports = {

        //Affichage des médocs
        All_Info: (req, res) => {
                model_Information.All_Info(function(lignes){
                        console.log(lignes)
                        res.render("./Recherche", {index : lignes});
                });
        },

        // Affichage des détails d'un médoc
        All_Sauveteur: (req, res) =>{
                let mot = req.param('searchword'); // Les autres solution n'étaient pas fonctionnelles
                mot = "%"+mot+"%";
                model_Information.All_Sauveteurs(function(lignes){
                        console.log(lignes)
                        res.render("./Recherche", {index : lignes});
                });
        },

        // Redirection vers page ajout client
        Ajouter_Client: (req, res) =>{

                res.render("./ajouterClient" ); 
        },

        // Ajouter un client
        Add_Client: (req, res) =>{
                let cli_secu = req.query['cli_secu'];
                let cli_nom = req.query['cli_nom'];
                let cli_prenom = req.query['cli_prenom'];
                let cli_naissance = req.query['cli_naissance'];
                let cli_mutuelle = req.query['cli_mutuelle'];
                sauteuhzModel.Ajouter_client( cli_secu, cli_nom, cli_prenom, cli_naissance, cli_mutuelle)
                sauteuhzModel.Clients_affichage(function(lignes){
                        console.log(lignes)
                        res.render("./listeClients", {index : lignes});
                });
        },

        // Supprimer un client
        Delete_Client: (req, res) =>{
                cli_Id = req.query['cli_Id'];
                console.log(cli_Id);
                sauteuhzModel.Delete_Client(cli_Id)
                sauteuhzModel.Clients_affichage(function(lignes){
                        console.log(lignes)
                        res.render("./listeClients", {index : lignes});
                });
        },

        // Redirection vers page d'ajout médoc
        Ajouter_Medoc: (req, res) =>{

                res.render("./ajouterMedoc" ); 
        },

        // Ajouter un médoc
        Add_Medoc: (req, res) =>{
                let medoc_nom = req.query['medoc_nom'];
                let medoc_type = req.query['medoc_type'];
                let medoc_description = req.query['medoc_description'];
                sauteuhzModel.Ajouter_Medoc( medoc_nom, medoc_type, medoc_description)
                sauteuhzModel.Medocs_affichage(function(lignes){
                        console.log(lignes)
                        res.render("./listeMedocs", {index : lignes});
                });
        },

        // Affichage des medocs
        Medocs_affichage: (req, res) =>{
                sauteuhzModel.Medocs_affichage(function(lignes){
                        console.log(lignes)
                        res.render("./listeMedocs", {index : lignes});
                });
        },

        // Affichage des détails d'un medoc
        Medocs_detail: (req, res) =>{
                let medoc_Id = req.query['medoc_Id'];
                sauteuhzModel.Medocs_detail(function(lignes){
                        console.log(lignes)
                        res.render("./detailMedoc", {index : lignes});
                },medoc_Id);
        },

        // Supprimer médoc
        Delete_Medoc: (req, res) =>{
                medoc_Id = req.query['medoc_Id'];
                console.log(medoc_Id);
                sauteuhzModel.Delete_Medoc(medoc_Id)
                sauteuhzModel.Medocs_affichage(function(lignes){
                        console.log(lignes)
                        res.render("./listeMedocs", {index : lignes});
                });
        },

        // Mise à jour du stock
        Medocs_update_stock: (req, res) =>{
                let medoc_Id = req.query['medoc_Id'];
                let medoc = req.query['medoc'];
                let mois = req.query['mois'];
                console.log(medoc_Id);
                console.log(medoc);

                let Mois = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
                mois = Mois[mois-1];
                

                sauteuhzModel.Medocs_update_stock(medoc, mois, medoc_Id)
                
                sauteuhzModel.Chart_affichage(function(lignes){
                        console.log(lignes)
                        res.render("./testchart", {index : lignes, medoc_Id : medoc_Id});
                }, medoc_Id);

        },

        // Mise à jour du besoin
        Medocs_update_besoin: (req, res) =>{
                let medoc_Id = req.query['medoc_Id'];
                let medoc = req.query['medoc'];
                let mois = req.query['mois'];
                console.log(medoc_Id);
                console.log(medoc);

                let Mois = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
                mois = Mois[mois-1];
                

                sauteuhzModel.Medocs_update_besoin(medoc, mois, medoc_Id)
                
                sauteuhzModel.Chart_affichage(function(lignes){
                        console.log(lignes)
                        res.render("./testchart", {index : lignes, medoc_Id : medoc_Id});
                }, medoc_Id);

        },

        // Affichage du graphique d'un medoc
        Chart_affichage: (req, res) =>{
                let medoc_Id = req.query['medoc_Id'];
                console.log(medoc_Id);
                sauteuhzModel.Chart_affichage(function(lignes){
                        console.log(lignes)
                        res.render("./testchart", {index : lignes, medoc_Id : medoc_Id});
                }, medoc_Id);
        },

        Compte_connection: (req, res) =>{

                res.render("./connexion");

        },

        Compte_connect: (req, res) =>{
                let compte_nom = req.body.nom;
                let compte_prenom = req.body.prenom;
                let compte_mdp = req.body.mdp;
                console.log(compte_nom, compte_prenom, compte_mdp);
                sauteuhzModel.Compte_connect(function(lignes){
                        console.log(lignes);
                        if(lignes !== ""){
                                res.render("./index", {index : lignes});
                        }else{
                                res.render("./connexion");
                        }
                }, compte_nom, compte_prenom, compte_mdp );

        }

}