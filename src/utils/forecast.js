const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&
    exclude=current&appid=defa7c6d3f09cf545dbc04d33731ac5e&units=metric`;

  request({ url, json: true }, (error, { body }) => {
    console.log(body);
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        " It is currently " + body.current.temp + " degress out."
      );
    }
  });
};

module.exports = forecast;
