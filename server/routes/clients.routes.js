const express = require('express');
const router = express.Router();


const clientController = require('../controllers/clients.controller');

router.get('/', clientController.getAllClients);
router.get('/:id', clientController.getByIdClient);
router.post('/', clientController.createClient);
router.put('/:id/client', clientController.updateClient);
router.put('/:id/credit', clientController.updateCredit);
router.delete('/:id', clientController.deleteClient);

module.exports = router;