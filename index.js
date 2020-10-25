const express = require('express');

//INICIALIZACION
const app = express();

//CONFIGURACIONES
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//VARIABLES GLOBALES
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

    next();
});

//CARGAR RUTAS
var operations_routes = require('./routes/operations.routes');


//RUTAS BASES
app.use('/api', operations_routes);

//Starting server

app.listen(app.get('port'), () => {
    console.log("Server on port", app.get('port'));
});