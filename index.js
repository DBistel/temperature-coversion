const convertToCelsius = (Fahrenheit) => {
    let result = ( Fahrenheit - 32 ) * (5/9);
    return result.toFixed(1)
}
const Celsius = convertToCelsius(76)
//console.log(Celsius)

const describeTemperature = (Fahrenheit) => {
    let Celsius = convertToCelsius (Fahrenheit)
    if (Celsius <= 0){
        return `The current temperature is ${Fahrenheit}°F/ ${Celsius}°C, it is very cold`
    } else if (Celsius <= 20){
         return `The current temperature is ${Fahrenheit}°F/ ${Celsius}°C, it is cold`
    } else if (Celsius <= 30){
         return `The current temperature is ${Fahrenheit}°F/ ${Celsius}°C, it is warm`
    } else if (Celsius <= 40){
         return `The current temperature is ${Fahrenheit}°F/ ${Celsius}°C, it is hot`
    } else {
         return `The current temperature is ${Fahrenheit}°F/ ${Celsius}°C, it is very hot`
    }

};
//let temperature = describeTemperature(110);
//console.log(temperature);

let person = prompt("Please enter the temperature in Fahrenheit", "°F");
//const Temp = parseFloat(person)
const temperature = describeTemperature(parseFloat(person))
//parseFloat can be nested into the describeTemperature function.
//console.log(temperature)
alert (temperature)


