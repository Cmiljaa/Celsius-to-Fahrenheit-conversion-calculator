class TemperatureConverter{

    //constructor dom manipulation

    constructor() {
        this.p = document.querySelector('.container .converter p');
        this.input = document.querySelector('.container .converter input');
        this.swap = document.querySelector('.container .converter #swap');
        this.calculate = document.querySelector('.container .converter #calculate');
        this.creatingresult();
        this.eventListeners();
    }

    //creating result paragraph

    creatingresult = () =>{
        let parent = document.querySelector('.container');
        this.np = document.createElement('p');
        this.np.innerHTML = '1°C = 33.800°F';
        parent.appendChild(this.np);
    }

    //fahrenheit to celsius

    reversef = () =>{
        this.p.innerHTML = 'Fahrenheit to Celsius (ºF to ºC) conversion calculator';
        this.input.setAttribute('placeholder', '°F');
        this.np.innerHTML = '1°F = 0.556°C';
    }

    //celsius to fahrenheit

    reversec = () =>{
        this.p.innerHTML = 'Celsius to Fahrenheit (ºC to ºF) conversion calculator';
        this.input.setAttribute('placeholder', '°C');
        this.np.innerHTML = '1°C = 33.800°F';
    }
    
    //changing method

    reverse = () => {
        if(this.input.getAttribute('placeholder') === '°C')
            this.reversef();
        else
            this.reversec();
        this.input.value = '';
    }

    //calculate method

    calculatef = () =>{
        if(this.input.value === '')
            alert('Your input is empty!');
        else{
            let value = parseFloat(this.input.value);
            if(this.input.getAttribute('placeholder') === '°C')
            {
                let res = (value * 1.8) + 32;
                this.np.innerHTML = `${this.input.value}°C = ${res.toFixed(3)}°F`
            }
            else
            {
                let res = (value - 32) / 1.8;
                this.np.innerHTML = `${this.input.value}°F = ${res.toFixed(3)}°C`
            }
        }
    }

    //adding eventlisteners to buttons

    eventListeners() {
        swap.addEventListener('click',() => this.reverse());

        calculate.addEventListener('click', () => this.calculatef());
    }

}

const obj = new TemperatureConverter();