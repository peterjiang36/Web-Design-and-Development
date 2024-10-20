document.getElementById("convert").addEventListener('click', function() {
    let temperature_input = document.getElementById("temperature");
    let celsius_input = document.getElementById("celsius");
    let fahrenheit_input = document.getElementById("fahrenheit");
    let result_output = document.getElementById("result");

    if (celsius_input.checked) {
        let fahrenheit = temperature_input.value * 1.8 + 32;
        result_output.innerText = fahrenheit + " F";
    } else {
        let celsius = (temperature_input.value - 32) / 1.8;
        result_output.innerText = celsius + " C";
    }
});