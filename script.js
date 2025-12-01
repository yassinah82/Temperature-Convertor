document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('btn');
    const tempInput = document.getElementById('Temp'); // matches HTML
    const result = document.getElementById('result');

    button.addEventListener('click', function(event) {
        let value = parseFloat(tempInput.value);
        let fromUnit = document.getElementById('Unit1').value;
        let toUnit = document.getElementById('Unit2').value;

        if (isNaN(value)) {
            result.innerHTML = "Please enter a valid number!";
            return;
        }

        let output;

        if (fromUnit === 'Celsius' && toUnit === 'Fahrenheit') {
            output = (value * 9/5 + 32) + ' °F';
        } else if (fromUnit === 'Fahrenheit' && toUnit === 'Celsius') {
            output = ((value - 32) * 5/9) + ' °C';
        } else if (fromUnit === 'Celsius' && toUnit === 'Kelvin') {
            output = (value + 273.15) + ' K';
        } else if (fromUnit === 'Kelvin' && toUnit === 'Celsius') {
            output = (value - 273.15) + ' °C';
        } else if (fromUnit === 'Fahrenheit' && toUnit === 'Kelvin') {
            output = ((value - 32) * 5/9 + 273.15) + ' K';
        } else if (fromUnit === 'Kelvin' && toUnit === 'Fahrenheit') {
            output = ((value - 273.15) * 9/5 + 32) + ' °F';
        } else {
            alert('Please select different units for conversion.');
        }

        result.innerHTML = output;
    });
});