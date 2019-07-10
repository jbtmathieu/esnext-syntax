const request = require('request-promise-native');

const recupMatricules = () => {

    return request('https://robin-br-collegues-api.herokuapp.com/collegues?nom=Thomas', {
            json: true
        })
        .then((tabMatsTrouve) => Promise.all(tabMatsTrouve.map((unMatricule) => {
            return recupCollegue(unMatricule);
        })));
}

const recupCollegue = (matricule) => {
    return request('https://robin-br-collegues-api.herokuapp.com/collegues/' + matricule, {
        json: true
    })
}

const tabMats$ = recupMatricules();

tabMats$
    .then((tabCollegues) => console.log(tabCollegues))
    .catch((err) => console.log('oops', err))