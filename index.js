

const express = require('express');
const {dbconnection} = require('./database/config')

const app = express();
require('dotenv').config();
const cors = require('cors')

app.use(cors())

dbconnection();



app.get('/', (req, res)=>{
    res.json({
        ok:true,
        msg: 'Hola Mundo'
    })
});


app.listen( process.env.PORT ,() => {console.log('Servidor corriendo en puerto 3000');} )