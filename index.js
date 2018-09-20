const express = require('express'),
      morgan = require('morgan'),
      cors = require('cors'),
      app = express();

// Setings
app.set('PORT' , process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'))
    .use(express.json)
    .use(cors())
    .use(cors({origin: 'http://localhost:4000'}));

// Routes
app.use()
   .use()
// Start Server
app.listen(app.get('port'),()=>{
    console.log(`Server running http://localhost:${app.get('port')}`)
})