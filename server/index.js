const express = require('express'),
    morgan = require('morgan'),
    cors = require('cors'),
    app = express();

const { mongoose } = require('./db')
// Setings
app.set('port', process.env.PORT || 3040);

// Middlewares
app.use(morgan('dev'));
app.use(express.json);
app.use(cors());
app.use(cors({ origin: 'http://localhost:4000' }));

// Routes
app.use('/api/clients', require('./routes/clients.routes'))

// Start Server
app.listen(app.get('port'), () => {
    console.log(`Server running http://localhost:${app.get('port')}`)
})