// inclure les dépendances et middlewares 

const express = require('express') 
const ejs = require('ejs')
const mysql = require('mysql')
const iniparser = require('iniparser')

const Routeur = require('./routes/SauteuhzRoute')


// activation des dépendances 
let app = express()
app.set('view engine', 'ejs')
app.use(express.static('views'))
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))


// Définition du port de l'application
const port = 3000
app.listen(port);
app.use('/PharmaScieSauteuse', Routeur);

module.exports = app
// erreur 404 //
app.use((req, res) => {
    res.status(404).render('erreur')
});