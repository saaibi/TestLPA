const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const app = express();

const { mongoose } = require('./db')

// Setings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(cors({ origin: 'http://localhost:4000' }));

// Routes
app.use('/api/clients', require('./routes/clients.routes'));

//Static 
app.use(express.static(path.join(__dirname, 'public')));

// Start Server
app.listen(app.get('port'), () => {
  console.log(`Server running http://localhost:${app.get('port')}`);
});
