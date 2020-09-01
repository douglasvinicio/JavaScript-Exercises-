if (!localStorage.getItem('counter')){
    localStorage.setItem('counter', 0)
}
        function count(){
            let counter = localStorage.getItem('counter');
            counter++;
            document.querySelector('h1').innerHTML = counter;
            localStorage.setItem('counter', counter);
        }
        //The EventListener need two arguments, first is the event and the second is the function. 
        //The function can be added inside the argument section also. Knowm as anonimous function.
        document.addEventListener('DOMContentLoaded',function(){
            //Showing always the actual value on timer/counter
            document.querySelector('h1').innerHTML = localStorage.getItem('counter');
            document.querySelector('button').onclick = count;    
            //document.querySelector('button').addEventListener('click', count); This is an option.

            setInterval(count, 1000);
        })
        
        