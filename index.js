

const express = require('express');
const {dbconnection} = require('./database/config')

const app = express();
require('dotenv').config();
const cors = require('cors')

app.use(cors())

app.use( express.json() );

dbconnection();


app.use('/api/usuarios', require('./routes/usuarios'));



app.listen( process.env.PORT ,() => {console.log('Servidor corriendo en puerto 3000');} )