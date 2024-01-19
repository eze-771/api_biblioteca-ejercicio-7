const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/biblioteca", {
});

const UsuarioSchema = new mongoose.Schema({
  name: String,
  email: String,
  // Add any other fields for the user model
}, { collection: 'usuarios' });

const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;