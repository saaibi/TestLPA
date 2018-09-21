const mongoose = require('mongoose'); 

const URI = 'mongodb://saaibi:Asd123456@ds211143.mlab.com:11143/testlpa';
const URI1 = 'mongodb://localhost/testlpa';

mongoose.connect(URI)
	.then(db => console.log(`DB is connected`))
	.catch(err => console.error(err));

module.exports = mongoose; 
