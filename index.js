const convertToCelsius = (Fahrenheit) => {
    return ( Fahrenheit - 32 ) * (5/9);
}
const celsius = convertToCelsius(76)


console.log(celsius)