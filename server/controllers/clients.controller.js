const Client = require("../models/clients");
const Credit = require("../models/credit");

const clientController = {};

clientController.getAllClients = async (req, res) => {
    const clients = await Client.find();
    res.json(clients);
};

clientController.getByIdClient = async (req, res) => {
    const client = await Client.findById(req.params.id);
    res.json(client);
};

//  Credit.schema.pre
clientController.createClient = async (req, res) => {
    const { firstName, lastName, client_id } = req.body;
    const creditModel = new Credit({});

    await creditModel.save((err) => {
        if (err) return (res.json({ error: err }));
    });
    const client = new Client({
        firstName, lastName, client_id, credit: creditModel,
    });
    await client.save((err, client) => {
        if (err) return res.json({ error: err });
        res.json({ status: "Client Saved", client });
    });

};

clientController.updateClient = async (req, res) => {
    const { firstName, lastName, client_id } = req.body;
    const clientUpdate = { firstName, lastName, client_id };
    await Client.findByIdAndUpdate(req.params.id, clientUpdate, { new: true }, (err, client) => {
        if (err) return res.json({ error: err });
        res.json({ status: "Client Updated", client });
    });

};

clientController.updateCredit = async (req, res) => {
    const { credit } = req.body;
    const options = { new: true, runValidators: true };
    await Client.findByIdAndUpdate(req.params.id, { $set: { credit: credit } }, options, (err, client) => {
        if (err) return res.json({ error: err });
        res.json({ status: "Credit Created", client });
    });

};

// Pending Review
clientController.deleteClient = async (req, res) => {
    await Client.findByIdAndRemove(req.params.id, async (err, client) => {
        if (err) return res.json({ error: err });
        await Credit.findByIdAndRemove(client.credit, (err,credit) => {
            if (err) return res.json({ error: err });
            res.json({ status: "Client Removed" });
        })
    });
};

module.exports = clientController;
