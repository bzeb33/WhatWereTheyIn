// File to hold controller code

// GET Homepage
// Define route, using view template with title "About"
const about = (req, res) => {
    // controller code for homepage
    res.render('index', { title: 'About' });
};
// expose the index function as a method
// updated export to reflect name change to "about" from "index"
module.exports = {
    about
};