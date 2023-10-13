// Función para convertir grados Celsius a grados Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  // Función para convertir grados Celsius a grados Kelvin
  function celsiusToKelvin(celsius) {
    return celsius + 273.15;
  }
  
  // Función para verificar si el valor ingresado es un número
  function esNumero(valor) {
    return !isNaN(valor) && isFinite(valor);
  }
  
  // Función principal
  function convertirTemperatura() {
    let entrada = prompt("Ingrese la temperatura en grados Celsius:");
  
    if (esNumero(entrada)) {
      const celsius = parseFloat(entrada);
      const fahrenheit = celsiusToFahrenheit(celsius);
      const kelvin = celsiusToKelvin(celsius);
  
      console.log(`Grados Kelvin: ${kelvin.toFixed(2)}`);
      console.log(`Grados Fahrenheit: ${fahrenheit.toFixed(2)}`);
    } else {
      alert("Debe ingresar un valor numérico.");
      convertirTemperatura(); // Llamada recursiva para solicitar de nuevo la entrada.
    }
  }
  
  convertirTemperatura();
  