const express = require('express');
const router = express.Router();
// require the main controllers file
const ctrlMain = require('../controllers/main');

/* GET home page. */
// Reference index method of the controllers in the route definition
router.get('/', ctrlMain.index);

module.exports = router;
