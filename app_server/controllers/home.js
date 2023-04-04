/* GET homepage */
const homepage = (req, res) => {
    res.render('wwti-homepage', { 
        title: 'What Were They In?',
        pageHeader: {
            title: 'What Were They In?',
            strapline: 'Seriously, what was it?'
        }
    });
};

/* GET results page */
const results = (req, res) => {
    //- Set to WWTI-homepage temporarily
    res.render('search-results', { title: 'Results' });
};

module.exports = {
    homepage,
    results
};