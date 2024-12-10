function convertTemperature() {
    const temperatureInput = document.getElementById('temperature');
    const temperature = parseFloat(temperatureInput.value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    const resultContainer = document.getElementById('result');
    
    // Clear previous errors
    resultContainer.style.color = "#333";

    if (isNaN(temperature)) {
        resultContainer.innerText = "❗ Please enter a valid number!";
        resultContainer.style.color = "red";
        return;
    }

    let result;
    if (inputUnit === outputUnit) {
        result = temperature; // No conversion needed
    } else if (inputUnit === 'Celsius') {
        result = outputUnit === 'Fahrenheit' ? (temperature * 9/5) + 32 : temperature + 273.15;
    } else if (inputUnit === 'Fahrenheit') {
        result = outputUnit === 'Celsius' ? (temperature - 32) * 5/9 : (temperature - 32) * 5/9 + 273.15;
    } else if (inputUnit === 'Kelvin') {
        result = outputUnit === 'Celsius' ? temperature - 273.15 : (temperature - 273.15) * 9/5 + 32;
    }

    resultContainer.innerText = `✅ ${temperature}°${inputUnit[0]} is ${result.toFixed(2)}°${outputUnit[0]}`;
}

function clearResult() {
    document.getElementById('result').innerText = "";
}
