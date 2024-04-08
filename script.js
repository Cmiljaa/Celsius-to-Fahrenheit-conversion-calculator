let p = document.querySelector('.container .converter p');
let input = document.querySelector('.container .converter input');
let swap = document.querySelector('.container .converter #swap');
let calculate = document.querySelector('.container .converter #calculate');

const reversef = () =>{
    p.innerHTML = 'Fahrenheit to Celsius (ºF to ºC) conversion calculator';
    input.setAttribute('placeholder', '°F');
}

const reversec = () =>{
    p.innerHTML = 'Celsius to Fahrenheit (ºC to ºF) conversion calculator';
    input.setAttribute('placeholder', '°C');
}

swap.addEventListener('click',() => reverse());

calculate.addEventListener('click', () => calculatef());

const reverse = () => {
    if(input.getAttribute('placeholder') === '°C')
        reversef();
    else
        reversec();
    removep();
    input.value = '';
}

const calculatef = () =>{
    let parent = document.querySelector('.container');
    parent.lastChild.remove();
    //parent.removeChild(np);
    let np = document.createElement('p');
    np.innerText = 'Jebem ti mamu';
    parent.appendChild(np);
}