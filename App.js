/**
 * 
 */


//dependancies
const express = require('express');


//path
const informationRouter = require('./routes/router.information')
const app = express();
const port = 3001;
app.set('view engine', 'ejs')
app.use(express.static('views'))
require('dotenv').config({path : './config/.env'});
require('./config/db')


//middleware
app.use(express.json());
app.use(express.urlencoded({extended : true}));

//router
app.use('/info' , informationRouter);
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