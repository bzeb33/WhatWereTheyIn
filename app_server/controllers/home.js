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

const fetch = require('node-fetch');

const url = 'https://online-movie-database.p.rapidapi.com/auto-complete?q=Jack';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'bfe68ef249msh8035254c1f65bd7p1e561cjsn36560474497d',
    'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => {
        const list = json.d;

        list.map((item) => {
            const name = item.l;
            const poster = item.i.imageUrl;
            const movie = `<li><img src="${poster}"> <h2>${name}</h2></li>`
            document.querySelector('.movies').innerHTML += movie;
        })
    })
	.catch(err => console.error('error:' + err));



module.exports = {
    homepage,
    results,
    fetch,
    url,
    options
};