const request = require('request')
require("dotenv").config()

// console.log(process.env.API_KEY)

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${process.env.API_KEY}&query=${latitude},${longitude}&units=f`

    request({ url: url, json: true }, (error, { body }) => {
        // console.log(response.body.current)
        if (error) {
            callback("Unable to connect to weather service", undefined)
        } else if (body.error) {
            callback("Unable to find location", undefined)
        }
        else {
            callback(undefined, `${body.current.weather_descriptions[0]}  it is currently ${body.current.temperature} degrees out .There feels like ${body.current.feelslike} degree`)
        }
    })
}

module.exports = forecast