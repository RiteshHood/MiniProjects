let convertBtn = document.getElementById("convert");
let unitField = document.getElementById("TemperatureType");


unitField.addEventListener("change", function () {

    let tempUnit = document.getElementById("TemperatureType").value;
    convertBtn.innerText = tempUnit === "Celsius" ? "Convert to Fahrenheit" : "Convert to Celsius";
})

convertBtn.addEventListener("click", function () {

    let temprature = parseFloat(document.getElementById("Temperature").value);
    let tempUnit = document.getElementById("TemperatureType").value;

    if (tempUnit == "Celsius") {

        let fahrenheit = (temprature * 1.8) + 32;
        let result = document.getElementById("result");
        result.textContent = " " + temprature + " celsius is " + fahrenheit + " in Fahrenheit";
        result.classList.add("resultSection");
    } else {

        let Celsius = (temprature - 32) / 1.8;
        let result = document.getElementById("result");
        result.textContent = " " + temprature + " Fahrenheit is " + Celsius + " in Celsius";
        result.classList.add("resultSection");
    }

})