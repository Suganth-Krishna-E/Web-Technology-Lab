const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bid: Number,
    bname: String,
    pubname: String,
    category: String,
    price: Number
});
module.exports.Books = mongoose.model("Books",bookSchema);

