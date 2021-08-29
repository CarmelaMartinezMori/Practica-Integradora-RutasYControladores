var express = require('express');
var router = express.Router();
const heroeController = require('../controllers/heroeController');

/* GET home page. */
router.get('/', heroeController.index);

/* GET heroes by ID */
router.get('/detalle/id/:id', heroeController.show);

/* GET heroes by ID */
router.get('/bio/id/:id/:ok?', heroeController.bio);

module.exports = router;