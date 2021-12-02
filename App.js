/**
 * 
 */


//dependancies
const express = require('express');


//path
const app = express();
const port = 3001;
require('dotenv').config({path : './config/.env'});
require('./config/db')


//middleware
app.use(express.json());
app.use(express.urlencoded({extended : true}));

//router
app.get('/' , (req,res)=>{
    res.send('home')
})
//404
app.use((req,res)=>{
    res.status(404).send('error no route');
})

app.listen(port , (req,res)=>{
    console.log(`Le serveur fonctionne sur http://localhost:${port}`)
})