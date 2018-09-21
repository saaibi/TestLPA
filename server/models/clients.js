const  mongoose = require('mongoose');
const { Schema } = mongoose;

// Create Schema
const ClientSchema = new Schema({
	firstName: { type: String, required: true},
    lastName: {type: String, required: true},
    document: {type: String, requerid: true},
	credit: {
        value : {type: Number, default: 0},
        interest : {type: Number, default: 0 },
        payDaily : {type: Number, default: 0 }
    }
})

module.exports = mongoose.model('Client', ClientSchema);
