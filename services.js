// SERVICES
weatherApp.service('cityService', function() {
   
    this.city = "New York, NY";
    
});

//taking the weather API info and make a service out of it and then I will have the flexibility to use the service somewhere else
weatherApp.service('weatherService', ['$resource', function ($resource) {
    
    
    this.GetWeather = function (city, days) {
    var apiKey = '75ab4a21554c3eea638f0493fc501db1';
    var weatherAPI = 
        $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
    
    return weatherAPI.get({ q: city, cnt: days, APPID: apiKey });
    };
}]);