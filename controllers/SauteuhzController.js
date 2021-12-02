//Importation de la connexion à la bdd
const bodyParser = require('body-parser');
const iniparser = require('iniparser');
var db = require('../database');
//Importation du fichier models
<

const jwt = require('jsonwebtoken')     // ajout token sécurisé
const dotenv = require('dotenv')        // le secret y est stocké
dotenv.config()

//Exportation des fonctions du controller 
module.exports = {

        // Redirection vers l'accueil
        Sauteuhz_accueil : (req, res) => {
                res.render("./index");
        },

        //Affichage des médocs
        Clients_affichage: (req, res) => {
                sauteuhzModel.Clients_affichage(function(lignes){
                        console.log(lignes)
                        res.render("./listeClients", {index : lignes});
                });
        },

        // Affichage des détails d'un médoc
        Clients_detail: (req, res) =>{
                let cli_secu = req.query['cli_secu'];
                console.log(cli_secu);
                sauteuhzModel.Clients_detail(function(lignes){
                        console.log(lignes)
                        res.render("./detailClient", {index : lignes});
                }, cli_secu);
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

                var loginController={  
                        // lorsque l'utilisateur doit saisir les identifiants pour s'authentifier
                        formLogin(req, res) {
                            console.log("Affiche authentification")
                            res.render('authentification')
                        },
                    
                        // vérification des identifiants et création éventuelle du token
                            login(req,res){ 
                            if (!req.body.compte_nom || !req.body.compte_prenom || !req.body.compte_mdp) {
                                return res.status(400).json({ message: `Erreur D'authentification. Vérifier l'identifiant et le mot de passe.` })
                            }
                    
                            // Simulation d'un utilisateur géré dans une BDD
                            if (req.body.nom == compte_nom && req.body.prenom == compte_prenom || req.body.mdp == compte_mdp) {
                                const token = jwt.sign(
                                    { id: 0, nom: req.body.compte_nom, prenom: req.compte_prenom},
                                    process.env.TOKEN_SECRET,
                                    { expiresIn: '360s'}
                                )
                                // renvoie vers la page authSuccess et transmet  la "variable" access_token
                                res.cookie("access_token", token, {httpOnly: true, secure: true})
                                .render('main', {message: {type:"success", msg: "Authentification réussie ("+token+")"}})
                            } else {
                                return res.status(400).json({ message: `Erreur D'authentification. Vérifier l'identifiant et le mot de passe.` })
                            }
                        },
                    
                        Error(req, res) {
                                res.render('404')
                        }
                }  
                    
                    module.exports = loginController; 

        },


}
