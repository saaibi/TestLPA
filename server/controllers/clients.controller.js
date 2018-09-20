const Client = require('../models/clients');

const clientController = {};

clientController.getClient = async (req, res) => {
    const clients = await Client.find();
    res.json(clients);
}

clientController.createClient = async (req, res) => {
    const event1 = new Client({
        firstName: "holaaa",
        lastName: "holaaa",
        credito_id: "holaaa",
        document: "holaaa"
    });

    await event1.save( (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('meow');
            res.json({
                'status': 'Flight saved'
            });
        }
    });
}
module.exports = clientController;