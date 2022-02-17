// todays temp
var kelvin = 300;

// Celsius Conversion
const celsius = kelvin - 273;

// Fahrenheit Conversion
let fahrenheit = celsius * (9 / 5) + 32;

// Take away decimal / round down
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

// Newton Conversion
let newton = celsius *(33/100);

// Take away decimal / round down
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`)
