let number = document.getElementById("number");
let AFahrenheit = document.getElementById("AFahrenheit");
let ACelsius = document.getElementById("ACelsius");
let resulta = document.getElementById("resulta");
let unite;
function conversion() {
    if (AFahrenheit.checked) {
        unite = (number.value * 9) / 5 + 32;
        resulta.innerText = unite.toFixed(2) + "℉";
    } else if (ACelsius.checked) {
        unite = ((number.value - 32) * 5) / 9;
        resulta.innerText = unite.toFixed(2) + "℃";
    } else {
        resulta.innerText = "Choiser une unite";
    }
}
