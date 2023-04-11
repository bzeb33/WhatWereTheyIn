const mongoose = require('mongoose');

// note for the below: This may not be needed.
// currently can't test mongodb import info with older node version
// once upgrade is complete, try import and schema with mongo dashboard FIRST
const moviesSchema = new mongoose.Schema({
    plot: String,
    genres: [String],
    runtime: Number,
    cast: [String],
    poster: String,
    num_mflix_comments: Number,
    title: String,
    fullplot: String,
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