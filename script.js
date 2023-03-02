const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

/* tenemos que enviar dos argumentos el primero es el nombre del evento y 
el segundo es el codigo js que queramos mandar a llamar cuando suceda */

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
    //console.log({event});
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}