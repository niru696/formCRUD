const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const employee_controller = require('../controllers/formController');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', employee_controller.test);

router.post('/create', employee_controller.create);

router.get('/display', employee_controller.display);

router.get('/details', employee_controller.findDetails);

router.get('/display/:_Id', employee_controller.findOne);

router.put('/display/:_Id', employee_controller.update);


router.delete('/display/:_Id', employee_controller.delete);

module.exports = router;

