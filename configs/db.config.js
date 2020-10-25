const mysql = require('mysql');
const { promisify } = require('util')

//CREAR CONEXIÓN A BASE DE DATOS
const mySqlConecction = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'alkemy_presupuesto'
});

//COMPROBAR SI BASE DE DATOS ESTA CONECTADA
mySqlConecction.connect(function(error) {

    if (error) {
        console.log(error);
    } else {
        console.log("DB is connected");
    }
});

//PARA PODER REALZIAR PROMESAS ASINCRONAS
mySqlConecction.query = promisify(mySqlConecction.query);

module.exports = mySqlConecction;