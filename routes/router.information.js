const router = require('express').Router();
const controllerAllInformation = require('../controllers/controllers.informations')


router.get('/allInfo' , controllerAllInformation.AllInformation)
router.get('/:id' , controllerAllInformation.ShearchInformation)
router.post('/addInfo' , controllerAllInformation.AddInformation)
router.put('/updateInfo', controllerAllInformation.UpdateInformation)
module.exports = router;