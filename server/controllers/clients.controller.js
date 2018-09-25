const Client = require("../models/clients");

const clientController = {};

clientController.getAllClients = async (req, res) => {
    const clients = await Client.find();
    res.json(clients);
};

clientController.getByIdClient = async (req, res) => {
    const client = await Client.findById(req.params.id);
    res.json(client);
};

clientController.createClient = async (req, res) => {
    const { firstName, lastName, client_id, credit } = req.body;
    const client = new Client({
        firstName, lastName, client_id, credit,
    });
    await client.save((err, client) => {
        if (err) return res.json({error: err});
        res.json({ status: "Client Saved", client });
    });
};

clientController.updateClient = async (req, res) => {
    const { firstName, lastName, client_id } = req.body;
    const clientUpdate = { firstName, lastName, client_id };
    await Client.findByIdAndUpdate(req.params.id, clientUpdate);
    res.json({ status: "Client Updated" });
};

clientController.updateCredit = async (req, res) => {
    const { credit } = req.body;
    await Client.update({ _id: req.params.id }, { $set: { credit: credit } });
    res.json({ status: "Credit Updated" });
};

clientController.deleteClient = async (req, res) => {
    await Client.findByIdAndRemove(req.params.id);
    res.json({ status: "Client Deleted" });
};

module.exports = clientController;
