const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema
const CamproundSchema = new Schema({
    title: String,
    image: String,
    price: Number,
    description: String,
    location: String
});

//Model that is exported
module.exports = mongoose.model('Campground', CamproundSchema);