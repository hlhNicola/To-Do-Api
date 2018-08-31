const mongoose = require('mongoose')

mongoose.Promise = global.Promise; // interesting
mongoose.connect('mongodb://localhost:27017/TodoApp')

module.exports = {mongoose}