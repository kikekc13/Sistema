var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClienteSchema = Schema({
    nombres: String,
    dni: String,
    email: String,
});

module.exports = mongoose.model('cliente', ClienteSchema);