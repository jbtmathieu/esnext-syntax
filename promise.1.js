const request = require('request');

function recupMatricules() {


    return new Promise(function (resolve, reject) {


        request('https://robin-br-collegues-api.herokuapp.com/collegues?nom=Thomas', {
            json: true
        }, function (err, resp, body) {

            if (err) {
                reject(err); // la promesse est rejetée
            }

            // 3
            const tabMatricules = body;

            resolve(tabMatricules); // => la promesse est résolue
            // => je valorise la valeur

        });

    });

    // 1

    // 2
}

const tabMats$ = recupMatricules();

tabMats$
    .then(function (resultat) {
        // cas ok
        console.log(resultat);
    })
    .catch(function (err) {
        // cas ko
        console.log('oops', err);
    })