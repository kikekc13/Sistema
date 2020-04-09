var express = require('express');
var productoController = require('../controllers/ProductoController');
var multipart = require('connect-multiparty');
var path = multipart({uploadDir: './uploads/productos'});

var api = express.Router();

api.post('/producto/registrar',path , productoController.registrar);
api.get('/productos/:titulo?', productoController.listar);
api.put('/productos/editar/:id',path, productoController.editar);
api.get('/producto/registro/:id', productoController.obtener_producto);

module.exports = api;
