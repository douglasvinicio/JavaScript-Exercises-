document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('form').onsubmit = () => {

    fetch('https://api.exchangeratesapi.io/latest?base=USD')
    .then(response => response.json())
    .then(data => {
        //Getting user input inside Currency and storing inside "currency"
        const currency = document.querySelector('#currency').value.toUpperCase();
        const rate = data.rates[currency];
        if(rate !== undefined){
            document.querySelector('#result').innerHTML = `1 USD is equal to ${rate.toFixed(2)} ${currency}.`;
        } else {
            document.querySelector('#result').innerHTML = 'Invalid currency'
        }
        
    })
    .catch(error => {
        console.log('Error: ', error)
    });
        return false;
    }

});