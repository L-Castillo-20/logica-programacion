const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function convertirTemperatura() {
    rl.question("Ingrese la temperatura como grados Celsius: ", (input) => {
        let celsius = parseFloat(input);

        if (isNaN(celsius)) {
            console.log("Error: Debe ingresar un número válido.");
            return convertirTemperatura(); 
        }

        let kelvin = celsius + 273.15;
        let fahrenheit = (celsius * 9/5) + 32;

        console.log(`Grados Kelvin: ${kelvin.toFixed(2)}`);
        console.log(`Grados Fahrenheit: ${fahrenheit.toFixed(2)}`);

        rl.close();
    });
}

convertirTemperatura();