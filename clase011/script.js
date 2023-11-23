console.log('Hello, world');

const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p');
const parrafito = document.getElementsByClassName('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

console.log( {
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = 'Patito <br> Feo';

h1.innerText = 'Patito <br> Feo';

//console.log(h1.getAttribute('pantalla'));

//cambia clase del elemento h1 a rojo
//h1.setAttribute('class', 'rojo');

//añade clase rojo a elemento h1
h1.classList.add('rojo');
h1.classList.remove('verde');
// h1.classList.toggle('verde');
// h1.classList.contains('verde');

input.value = "456"
//modificar el valor de 'value'

const img = document.createElement('img');
img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');
img.setAttribute('width', '200px;')
img.setAttribute('style', 'border:2px solid black;border-radius:15px;')
console.log(img);

pid.innerHTML = "";
//pid.append(img);
pid.appendChild(img);