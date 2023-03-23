/* GET homepage */
const homepage = (req, res) => {
    res.render('wwti-homepage', { title: 'Home' });
};

/* GET results page */
const searchResults = (req, res) => {
    //- Set to WWTI-homepage temporarily
    res.render('wwti-homepage', { title: 'Results' });
};

module.exports = {
    homepage,
    searchResults
};