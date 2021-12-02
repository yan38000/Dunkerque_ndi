const router = require('express').Router();
const controllerAllInformation = require('../controllers/controllers.informations')


router.get('/allInfo' , controllerAllInformation.AllInformation)

module.exports = router;