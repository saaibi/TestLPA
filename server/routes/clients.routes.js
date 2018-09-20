const express = require('express');
const router = express.Router();

const clientController = require('../controllers/clients.controller');

console.log(router)
router.get('/', clientController.getClient);
router.post('/', clientController.createClient);

module.exports = router;