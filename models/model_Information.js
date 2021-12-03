

//Importation de la connexion à la bdd
var db = require('../database')



//Exportation du model mysql (requêtes...)
module.exports={

    All_Info:function(callback){
  
    
        var sql='SELECT Nom_Bateau FROM bateau';
        db.query(sql, function (err, data, fields){
            if (err) throw err;
            return callback(data);
        });
        
    },

    Clients_detail:function(callback, cli_secu){

        console.log(cli_secu);
        var sql="SELECT DATE_FORMAT(cli_naissance,'%d/%m/%Y') AS cli_naissance, cli_secu, cli_nom, cli_prenom, cli_mutuelle FROM client where cli_secu = '"+cli_secu+"'";
        db.query(sql, function (err, data, fields){
            if (err) throw err;
            return callback(data);
        });
    },

    Ajouter_client:function(cli_secu, cli_nom, cli_prenom, cli_naissance, cli_mutuelle){

        var sql="Insert Into client (cli_secu, cli_nom, cli_prenom, cli_naissance, cli_mutuelle) Values ('"+cli_secu+"', '"+cli_nom+"', '"+cli_prenom+"', '"+cli_naissance+"', '"+cli_mutuelle+"') ";
        db.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result.affectedRows + " record(s) created");
          });
    },

    Delete_Client:function(cli_Id){

        var sql="Delete From client where cli_Id = '"+cli_Id+"'";
        console.log(sql);
        db.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result.affectedRows + " record(s) Deleted");
          });
    },

    Ajouter_Medoc:function(medoc_nom, medoc_type, medoc_description){

        var sql="Insert Into medicament (medoc_nom, medoc_type, medoc_description) Values ('"+medoc_nom+"', '"+medoc_type+"', '"+medoc_description+"') ";
        db.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result.affectedRows + " record(s) created");
          });
    },


    Medocs_affichage:function(callback) {

        var sql='SELECT medoc_Id, medoc_nom FROM medicament';
        db.query(sql, function (err, data, fields){
            if (err) throw err;
            return callback(data);
        });
    },

    Medocs_detail:function(callback, medoc_Id) {

        var sql="SELECT medoc_Id, medoc_nom, medoc_type FROM medicament where medoc_Id='"+medoc_Id+"'";
        db.query(sql, function (err, data, fields){
            if (err) throw err;
            return callback(data);
        });
    },

    Delete_Medoc:function(medoc_Id){

        var sql="Delete From medicament where medoc_Id = '"+medoc_Id+"'";
        console.log(sql);
        db.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result.affectedRows + " record(s) Deleted");
          });
    },

    Medocs_update_stock: (medoc, mois, medoc_Id) =>{

        let sql = "UPDATE medicament SET medoc_stock"+mois+" = '"+medoc+"' WHERE medoc_Id = '"+medoc_Id+"'";
        console.log(sql);
        db.query(sql, function (err, result) {
          if (err) throw err;
          console.log(result.affectedRows + " record(s) updated");
        });

    },

    Medocs_update_besoin: (medoc, mois, medoc_Id) =>{
        

        let sql = "UPDATE medicament SET medoc_besoin"+mois+" = '"+medoc+"' WHERE medoc_Id = '"+medoc_Id+"'";
        db.query(sql, function (err, result) {
          if (err) throw err;
          console.log(result.affectedRows + " record(s) updated");
        });
    },

    Chart_affichage:function(callback, medoc_Id) {

        var sql="SELECT medoc_Id, medoc_stockJanvier, medoc_stockFevrier, medoc_stockMars, medoc_stockAvril, medoc_stockMai, medoc_stockJuin, medoc_stockJuillet,medoc_stockAout, medoc_stockSeptembre, medoc_stockOctobre, medoc_stockNovembre, medoc_stockDecembre, medoc_besoinJanvier,medoc_besoinFevrier, medoc_besoinMars, medoc_besoinAvril, medoc_besoinMai, medoc_besoinJuin, medoc_besoinJuillet, medoc_besoinAout, medoc_besoinSeptembre, medoc_besoinOctobre, medoc_besoinNovembre, medoc_besoinDecembre FROM medicament Where medoc_Id= '"+medoc_Id+"'";
        db.query(sql, function (err, data, fields){
            if (err) throw err;
            return callback(data);
        });
    },

    Compte_connect:function(callback, compte_nom, compte_prenom, compte_mdp) {

        var sql="SELECT * FROM compte where compte_Nom='"+compte_nom+"' And compte_Prenom = '"+compte_prenom+"' And compte_Mdp = '"+compte_mdp+"'";
        db.query(sql, function (err, data, fields){
            if (err) throw err;
            return callback(data);
        });
    },

}
