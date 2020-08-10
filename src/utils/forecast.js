const request = require('request')


const forecast = (lat, lon ,clallback) => {
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&exclude=hourly,daily&appid=9857e496651d355cd8d666e05978dec7&units=metric'
    
    request({url,  json:true},(error,{body})=>{
        if (error) {
            clallback('Unable to connect to weather services!',undefined)
        } else if(body.message){
            clallback('Unable to find location',undefined)
        }else{
            clallback(undefined,'It is currently '+body.current.temp+'°C. The humidity is '+body.current.humidity+'%.')
        }
    })
}

module.exports = forecast