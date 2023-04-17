const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema({
    plot: String,
    genres: [String],
    runtime: Number,
    cast: [String],
    poster: String,
    title: String,
    fullplot: String,
    languages: [String],
    countries: [String],
    released: Date,
    directors: [String],
    rated: String,
    awards: String,
    nominations: String,
    lastupdated: String,
    year: Number,
    imdb: String,
    votes: Number,
    type: String,
    tomatoes: String,
    numReviews: Number,
    meter: Number

});

mongoose.model('Movies', moviesSchema);