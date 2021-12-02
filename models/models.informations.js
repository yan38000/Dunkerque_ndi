var db = require('../config/db');

module.exports={

    All_Info:function(callback){
  
    
        var sql='SELECT Nom_Bateau FROM bateau';
        db.query(sql, function (err, data, fields){
            if (err) throw err;
            return callback(data);
        });
        
    },
}