const express = require('express');
const router = express.Router();


const clientController = require('../controllers/clients.controller');
const Client = require('../models/clients');


// router.get('/', async (req, res) => {
//     const clients = await Client.find();
//     console.log(clients)
//     res.json(clients);
// });
router.get('/', clientController.getAllClients);
router.get('/:id', clientController.getByIdClient);
router.post('/', clientController.createClient);
router.put('/:id', clientController.updateClient);
router.delete('/:id', clientController.deleteClient);

module.exports = router;