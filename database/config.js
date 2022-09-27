const mongoose = require('mongoose');
require('dotenv').config();

const dbconnection = async() => {

    try {
        mongoose.connect(process.env.DB_CNN);

            console.log('DB Online');
    } catch (error) {
        console.log(erro);
        throw new Error('Error al iniciar la BD')
    }
}

module.exports = {
    dbconnection
}