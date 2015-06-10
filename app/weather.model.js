function Weather(json, config) {
    this.city = json.name;
    this.country = json.sys.country;
    
    this.lon = json.coord.lon + '°';
    this.lat = json.coord.lat + '°';    
    this.description = capitalizeEachWord(json.weather[0].description);
    this.iconUrl = config.iconUrl.replace('{iconId}', json.weather[0].icon);
    this.temp = json.main.temp + '° ' + config.formatUnits[config.lang].temp;
    this.temp_min = json.main.temp_min + '° ' + config.formatUnits[config.lang].temp;
    this.temp_max = json.main.temp_max + '° ' + config.formatUnits[config.lang].temp;
    this.pressure = json.main.pressure + ' ' + config.formatUnits[config.lang].pressure;
    this.humidity = json.main.humidity + config.formatUnits[config.lang].humidity;
    this.wind_speed = json.wind.speed + ' ' + config.formatUnits[config.lang].speed;
};
//Weather.prototype.capitalizeEachWord = capitalizeEachWord;

function capitalizeEachWord(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};

