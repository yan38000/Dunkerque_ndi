//Importation du module express
var express = require('express');
//Importation du fichier de routage
const Routeur = require('./routes/SauteuhzRoute')

const fs = require('fs')
const path     = require('path') 
const http = require('http')
const https = require('https')    
const middlewares = require('./middlewares')
const cookieParser = require("cookie-parser")
const cors = require('cors') 
const morgan = require('morgan')

const Routes = require('./routes/SauteuhzRoute')


//Déclaration, paramètrage et utilisation de l'app
let app = express()
app.set('view engine', 'ejs')
app.use(express.static('views'))
app.use(express.static('public'))
app.use('/', Routeur);-
app.use('/image', express.static(__dirname + '/images'));

app.use(cors())
app.use(morgan('tiny'))
app.use(cookieParser())

const port = process.env.port || 3000

// Définition des certificats pour le protocole HTTPS
const key = fs.readFileSync(path.join(__dirname, 'certificate', 'server.key'))
const cert = fs.readFileSync(path.join(__dirname, 'certificate', 'server.cert'))
const options = { key, cert }


// DÉMARRAGE DE L'APPLICATION
https.createServer(options, app).listen(port, () => {
    console.log(`server running HTTPS. Go to https://localhost:${port}`)
  })

/* partie test pour capture non chiffrée : Wireshark. */
app.listen(port+1, () => {
  console.log(`server running HTTP. Go to http://localhost:${port+1}`)
})

app.use('/listeClients/', middlewares.checkCookieJWT, Routes)
app.use('/listeMedocs/', middlewares.checkCookieJWT, Routes)

module.exports = app