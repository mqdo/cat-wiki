const express = require('express');

const router = express.Router();
const controller = require('../controllers/cat.controller');

router.get('/all', controller.getAll);

router.get('/breed/:id', controller.getById);

router.get('/search', controller.search);

module.exports = router;
