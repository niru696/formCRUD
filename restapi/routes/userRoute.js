const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const employee_controller = require('../controllers/userController');

// router.get('/test1', employee_controller.test);
// router.post('/user', employee_controller.createUser);
// router.get('/user', employee_controller.getUser);

module.exports = router;