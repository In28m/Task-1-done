/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const form = document.querySelector("form")

form.addEventListener("submit", e => {
    e.preventDefault()
    const kilograms = parseFloat(document.getElementById('search').value)

    if(!isNaN(kilograms)) {
        let pounds = kilograms * 2.2046
        let grams = kilograms / 0.0010000
        let ounces = kilograms * 35.274

    output.innerHTML = `
    <h2>Conversion Results</h2>
    <p>${kilograms} kilograms is:</p>
    <ul>
      <li>${pounds.toFixed(2)} pounds (lb)</li>
      <li>${grams.toFixed(2)} grams (g)</li>
      <li>${ounces.toFixed(2)} ounces (oz)</li>
    </ul>`

    }
})