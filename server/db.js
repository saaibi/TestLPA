const mongoose = require('mongoose'); 

const URI = 'mongodb://saaibi:Asd123456@ds211143.mlab.com:11143/testlpa';

mongoose.connect(URI)
	.then(db => console.log(`DB running https://mlab.com/databases/testlpa`))
	.catch(err => console.error(err));

module.exports = mongoose; 

//const URI = 'mongodb://yeilop44:Fragante44@ds245772.mlab.com:45772/meansearchflights';
//   mongodb://saaibi:Asd123456@ds211143.mlab.com:11143/testlpa
// mongo ds245772.mlab.com:45772/meansearchflights -u yeilop44 -p Fragante44