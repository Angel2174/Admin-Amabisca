'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

//cargar rutas
var user_routes = require('./routes/user'); //carga la configuracion de rutas del controlador en este caso usuario
var planificacion_semanal_sner_routes = require('./routes/planificacion_semanal_sner');
var select_empleado_routes = require('./routes/select_empleado');
//middlewares  ---> metodo que se ejecuta antes de que llegue a un controlador, en cada ejecucion ser va ejecutar este middlewares

// cuando resiva informacion de datos en una peticion lo va convertir en un objeto json, en cada peticion del BACKEND
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//cors
app.use(cors());
//rutas
app.use('/api', user_routes); //me permite hacer middlewares ---> tendre una ruta disponible '/api',lo que yo tenga en el routes
app.use('/api', planificacion_semanal_sner_routes);
app.use('/api', select_empleado_routes);

//exportar la configuracion

module.exports = app;