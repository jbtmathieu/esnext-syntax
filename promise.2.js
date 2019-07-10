const request = require('request-promise-native');

function recupMatricules() {

    return request('https://robin-br-collegues-api.herokuapp.com/collegues?nom=Thomas', {
            json: true
        })
        .then(function (tabMatsTrouve) {
            return Promise.all(tabMatsTrouve.map(function (unMatricule) {
                return recupCollegue(unMatricule);
            }));
        });
}

function recupCollegue(matricule) {
    return request('https://robin-br-collegues-api.herokuapp.com/collegues/' + matricule, {
        json: true
    })
}

const tabMats$ = recupMatricules();

tabMats$
    .then(function (tabCollegues) {
        // cas ok
        console.log(resultat);
    })
    .catch(function (err) {
        // cas ko
        console.log('oops', err);
    })