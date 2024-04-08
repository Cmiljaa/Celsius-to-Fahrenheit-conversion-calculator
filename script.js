let p = document.querySelector('.container .converter p');
let input = document.querySelector('.container .converter input');
let swap = document.querySelector('.container .converter #swap');
let calculate = document.querySelector('.container .converter #calculate');

const reversef = () =>{
    p.innerHTML = 'Fahrenheit to Celsius (ºF to ºC) conversion calculator';
    input.setAttribute('placeholder', '°F');
    document.querySelector('.result').innerHTML = '1°F = 0.556°C';
}

const reversec = () =>{
    p.innerHTML = 'Celsius to Fahrenheit (ºC to ºF) conversion calculator';
    input.setAttribute('placeholder', '°C');
    document.querySelector('.result').innerHTML = '1°C = 33.800°F';
}

window.onload = () => {
    let parent = document.querySelector('.container');
    let np = document.createElement('p');
    np.setAttribute('class','result')
    np.innerHTML = '1°C = 33.800°F';
    parent.appendChild(np);
}

swap.addEventListener('click',() => reverse());

calculate.addEventListener('click', () => console.log('q'));

const reverse = () => {
    if(input.getAttribute('placeholder') === '°C')
        reversef();
    else
        reversec();
    input.value = '';
}
