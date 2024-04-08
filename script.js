let p = document.querySelector('.container .converter p');
let input = document.querySelector('.container .converter input');
let swap = document.querySelector('.container .converter #swap');
let calculate = document.querySelector('.container .converter #calculate');

window.onload = () => {
    let parent = document.querySelector('.container');
    let np = document.createElement('p');
    np.setAttribute('class','result')
    np.innerHTML = '1°C = 33.800°F';
    parent.appendChild(np);
}

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

const reverse = () => {
    if(input.getAttribute('placeholder') === '°C')
        reversef();
    else
        reversec();
    input.value = '';
}

const calculatef = () =>{
    if(input.value === '')
        alert('Your input is empty!');
    else{
        let value = parseFloat(input.value);
        if(input.getAttribute('placeholder') === '°C')
        {
            let res = (value * 1.8) + 32;
            document.querySelector('.result').innerHTML = `${input.value}°C = ${res.toFixed(3)}°F`
        }
        else
        {
            let res = (value - 32) / 1.8;
            document.querySelector('.result').innerHTML = `${input.value}°F = ${res.toFixed(3)}°C`
        }
    }
}

swap.addEventListener('click',() => reverse());

calculate.addEventListener('click', () => calculatef());