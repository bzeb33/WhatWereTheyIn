// File to hold controller code

// GET Homepage
// creating an index function
const index = (req, res) => {
    // controller code for homepage
    res.render('index', { title: 'Express' });
};
// expose the index function as a method
module.exports = {
    index
};