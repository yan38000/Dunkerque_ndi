const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : process.env.LOCALHOST,
    user     : process.env.USER,
    password : process.env.PASSWORD
    
})

connection.connect(function(err) {
    if (err) {
      console.error('error connecting');
      return;
    }
   
    console.log('connected');
})