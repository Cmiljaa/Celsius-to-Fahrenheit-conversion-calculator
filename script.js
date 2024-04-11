class TemperatureConverter{
    constructor() {
        this.p = document.querySelector('.container .converter p');
        this.input = document.querySelector('.container .converter input');
        this.swap = document.querySelector('.container .converter #swap');
        this.calculate = document.querySelector('.container .converter #calculate');
        this.initialization();
        this.eventListeners();
    }

    initialization = () =>{
        let parent = document.querySelector('.container');
        this.np = document.createElement('p');
        this.np.setAttribute('class','result');
        this.np.innerHTML = '1°C = 33.800°F';
        parent.appendChild(this.np);
    }

    reversef = () =>{
        this.p.innerHTML = 'Fahrenheit to Celsius (ºF to ºC) conversion calculator';
        this.input.setAttribute('placeholder', '°F');
        document.querySelector('.result').innerHTML = '1°F = 0.556°C';
    }
    
    reversec = () =>{
        this.p.innerHTML = 'Celsius to Fahrenheit (ºC to ºF) conversion calculator';
        this.input.setAttribute('placeholder', '°C');
        document.querySelector('.result').innerHTML = '1°C = 33.800°F';
    }
    
    reverse = () => {
        if(input.getAttribute('placeholder') === '°C')
            this.reversef();
        else
            this.reversec();
        this.input.value = '';
    }

    calculatef = () =>{
        if(this.input.value === '')
            alert('Your input is empty!');
        else{
            let value = parseFloat(this.input.value);
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

    eventListeners() {
        swap.addEventListener('click',() => this.reverse());

        calculate.addEventListener('click', () => this.calculatef());
    }

}

const obj = new TemperatureConverter();