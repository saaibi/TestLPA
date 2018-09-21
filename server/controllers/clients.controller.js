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
  const { firstName, lastName, credito_id, document } = req.body;
  const client = new Client({ firstName, lastName, credito_id, document });
  await client.save();
  res.json({ status: "Client Saved" });
};

clientController.updateClient = async (req, res) => {
  const { firstName, lastName, credito_id, document } = req.body;
  const clientUpdate = { firstName, lastName, credito_id, document };
  await Client.findByIdAndUpdate(req.params.id, clientUpdate);
  res.json({ status: "Client Updated" });
};

clientController.deleteClient = async (req, res) => {
  await Client.findByIdAndRemove(req.params.id);
  res.json({ status: "Client Deleted" });
};

module.exports = clientController;
