
//let
let favoriteCityId = 'rome';
console.log(favoriteCityId);
favoriteCityId = "paris";
console.log(favoriteCityId);

//const
const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
console.log(citiesId);
/*
citiesId =[]; //TypeError: Assignment to constant variable.
*/
citiesId.push("tokyo");
console.log(citiesId);

//Création d'objet
function getWeather(cityId) {

    let city = cityId;
    let temperature = 20;

    return { city, temperature };
}
console.log('Object', getWeather("PARIS"));

//Affectation destructurée
let { city, temperature } = getWeather("PARIS");
console.log(city);
console.log(temperature);

//Rest operator
let [parisId, nycId, ...othersCitiesId] = citiesId;
console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);

//Classe

class Trip {
    constructor(id, name, imageUrl) {
        this.id = id || "paris";
        this.name = name || "PARIS";
        this.imageUrl = imageUrl || "img/paris.jpg";
        this.price;
    }
    toString() {
        return [this.id, this.name, this.imageUrl, this.price];
    }

    getPrice() {
        return _price;
    }
    setPrice(_price) {
        this.price = _price;
    }
    getDefaultTrip() {
        return new Trip('rio-de-janeiro', 'Rio-de-janeiro', 'img/rio-de-janeiro');
    }
}
let parisTrip = new Trip('paris', 'PARIS', 'img/paris.jpg');
let paris2Trip = new Trip();

console.log(parisTrip);
console.log(parisTrip.name);
/*
console.log(paris2Trip);
console.log(paris2Trip.name); */
parisTrip.setPrice(100);
console.log('Trip', parisTrip.toString());

let defaultTrip = parisTrip.getDefaultTrip();
console.log('Trip', defaultTrip.toString());


//Héritage
class FreeTrip extends Trip {
    constructor(id, name, imageUrl) {
        super(id, name, imageUrl);
        super.price = 0;
    }

}

let freeTrip = new FreeTrip('nantes', 'NANTES', 'img/nantes');

console.log('Trip', freeTrip.toString());
console.log(freeTrip);

//Promise, Set, Map, Arrow Function
console.log('Promise, Set, Map, Arrow Function');
class TripService {

    constructor() {
        // TODO Set of 3 trips
        //
        // new Trip('paris', 'Paris', 'img/paris.jpg')
        // new Trip('nantes', 'Nantes', 'img/nantes.jpg')
        // new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
        this.trips = new Set();
        this.trips.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
        this.trips.add(new Trip('rio-de-janeiro', 'Rio-de-janeiro', 'img/rio-de-janeiro'));
        this.trips.add(new FreeTrip('nantes', 'Nantes', 'img/nantes'));

    }

    findByName(tripName) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                // ici l'exécution du code est asynchrone

                // TODO utiliser resolve et reject en fonction du résultat de la recherche
                for (const trip of this.trips) {
                   // console.log(trip);
                    if (trip.name == tripName) {
                        resolve(trip);
                        return;
                    }
                }
                reject('No trip with name \''+ tripName+'\'');
            
        }, 2000);
    });
    
    }
}




class PriceService {

    constructor() {
        // TODO Map of 2 trips
        // 'paris' --> price = 100
        // 'rio-de-janeiro' --> price = 800)
        // no price for 'nantes'
        this.prices = new Map();
        this.prices.set('Paris', 100);
        this.prices.set('Rio de Janeiro', 800);


    }

    findPriceByTripId(tripId) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                // ici l'exécution du code est asynchrone

                // TODO utiliser resolve et reject en fonction du résultat de la recherche
                
                if (this.prices.has(tripId)) {
                    resolve(this.prices.get(tripId));
                    return;
                } else {
                    reject('No price for trip id \''+ tripId+'\'');
                }


            }, 2000);
        });
    }
}

let tripService = new TripService();
tripService.findByName('Paris')
.then(trip => {
console.log('Trip found:',trip);
})
.catch(err => {
    console.log(err);
});

tripService.findByName('Toulouse')
.then(trip => {
console.log('Trip found:',trip);
})
.catch(err => {
    console.log(err);
});

console.log('\/\/', 'Asynch proof : this code is between trip and price service tests');
let priceService = new PriceService();
priceService.findPriceByTripId('Rio de Janeiro')
.then (price => console.log("Price found : ", price))
.catch(err => console.log(err));

priceService.findPriceByTripId('Nantes')
.then (price => console.log("Price found : ", price))
.catch(err => console.log(err));
