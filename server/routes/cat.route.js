const express = require('express');

const router = express.Router();
const controller = require('../controllers/cat.controller');

router.get('/all', controller.renew);

router.get('/top', controller.getTop);

router.get('/breed/:id', controller.getById);

router.get('/search', controller.search);

module.exports = router;
