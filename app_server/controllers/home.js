/* GET homepage */
const homepage = (req, res) => {
    res.render('index', { title: 'Home' });
};

/* GET results page */
const searchResults = (req, res) => {
    res.render('index', { title: 'Results' });
};

module.exports = {
    homepage,
    searchResults
};