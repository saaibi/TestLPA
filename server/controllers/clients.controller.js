const client = require('../models/clients');

const clientController= () => {};


clientController.getAll = async (req , res ,next) => {
    const client = await client.find();
    res.json(client);
}