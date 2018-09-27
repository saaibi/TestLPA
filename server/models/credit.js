const mongoose = require('mongoose');
const moment = require('moment');
const { Schema } = mongoose;

//moment('05/15/2020 12:00', 'MM/DD/YYYY HH:mm')

const creditSchema = new Schema({
    addCredit: { type: Boolean, default: false },
    valuePaid: { type: Number, default: 0 },
    payDaily: { type: Number, default: 0 },
    startDate: { type: Date, default: Date.now() },
    endDate: { type: Date, default: moment('05/15/2020 12:00', 'MM/DD/YYYY HH:mm') },
    valueCredit: {
        type: Number,
        max: 1000000,
        min: 0,
    },
    percentagePaid: { type: Number, default: 0 },
    interest: { type: Number, default: 0 }
}, {
        versionKey: false,
        timestamps:true
    });

creditSchema.pre('save', function (next) {
    let { addCredit, valueCredit, valuePaid } = this;
    this.percentagePaid = (valuePaid / valueCredit) * 100;
    this.interest = addCredit ? 20 : 0;
    next();
});

module.exports = mongoose.model('Credit', creditSchema)