

//Importation de la connexion à la bdd
var db = require('../database')



//Exportation du model mysql (requêtes...)
module.exports={

    All_Info:function(callback){
  
    
        var sql="SELECT * FROM sauveteur, bateau, sauve";
        db.query(sql, function (err, data, fields){
            if (err) throw err;
            return callback(data);
        });
        
    },

   /* All_Sauveteurs:function(callback){

        var sql="SELECT Nom_Sauveteur, Date_Sauvetage, Nom_Sauve, Nom_Bateau FROM Sauveteur WHERE Nom_Sauveteur LIKE ? OR Date_Sauvetage Like ? OR Nom_Sauve Like ? OR Nom_Bateau Like ? ";
        db.query(sql,[mot,mot2,mot3,mot4], function (err, data, fields){
            let data = await db.searchPatient(mot,mot,mot)
            res.render('patient', {patients : data, moment : moment, c : couleur})
            if (err) throw err;
            return callback(data);
        });
    },*/

}
