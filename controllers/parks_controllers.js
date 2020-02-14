//getting geoloction from user input//

let geolocator ;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
}

//Lat and long//

function successFunction(position) {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
}

///Google maps API//

var unirest = require("unirest");

var req = unirest("GET", "https://google-maps-geocoding.p.rapidapi.com/geocode/json");

req.query({
	"language": "en",
	"latlng": "40.714224%2C-73.96145"
});

req.headers({
	"x-rapidapi-host": "google-maps-geocoding.p.rapidapi.com",
	"x-rapidapi-key": "SIGN-UP-FOR-KEY"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});