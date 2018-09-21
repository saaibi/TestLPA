const  mongoose = require('mongoose');
const { Schema } = mongoose;

// Create Schema
const ClientSchema = new Schema({
	firstName: { type: String, required: true},
	lastName: {type: String, required: true},
	credito_id: {type: String, required: true},
	document: {type: String, requerid: true}
})

module.exports = mongoose.model('Client', ClientSchema);
