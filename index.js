//Importation du module express
var express = require('express');
//Importation du fichier de routage
const Routeur = require('./routes/route_Information')

//Déclaration, paramètrage et utilisation de l'app
let app = express()
app.set('view engine', 'ejs')
app.use(express.static('views'))
app.use(express.static('public'))
app.use('/', Routeur);


const port = 3000




app.listen(port);


module.exports = app