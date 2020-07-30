const mongoose = require('mongoose');
const Schema = mongoose.Schema;

newSchema = new Schema({
name: String,
email: String,
paeeword: String
})

module.exports = mongoose.model('User',newSchema);