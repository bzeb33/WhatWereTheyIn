const express = require('express');
const router = express.Router();
// require the two routes
const ctrlHome = require('../controllers/home');
const ctrlOthers = require('../controllers/others');
const ctrlScript = require('../controllers/script');


/* GET Homepage & Results */
// Define location routes and map them to controller functions
router.get('/', ctrlHome.homepage);
router.get('/results', ctrlHome.results);

/* GET Other pages */
// Defining "Others" route
router.get('/about', ctrlOthers.about);

module.exports = router;
