const mongoose = require('mongoose');

// user schema
const MovieSchema = mongoose.Schema({
    backgroundImg: {
        type: String,
        required: true
    },
    cardImg: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    subTitle: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    titleImg: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
})

// collection inside of the db
const Movie = module.exports = mongoose.model('disney-movies', MovieSchema);