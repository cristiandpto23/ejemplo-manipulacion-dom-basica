const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

// btn.addEventListener('click', btnOnClick);
// tiene dos parámetros: evento y la función que se llama. No es necesario ponerle paréntesis a la función, ya que el parámetro en sí es una función (poner paréntesis sería redundar).


// function btnOnClick() {
//     const sumaInputs = input1.value + input2.value;
//     pResult.innerText = "Resultado: " + sumaInputs;
// };

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
        //console.log({event});
        event.preventDefault();
        const sumaInputs = input1.value + input2.value;
        pResult.innerText = "Resultado: " + sumaInputs;
        return
};
    