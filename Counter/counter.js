let counter = 0;

        function count(){
            counter++;
            document.querySelector('h1').innerHTML = counter;

            if(counter % 10 === 0){
                alert(`Count is now ${counter}`)
            }
        }
        //The EventListener need two arguments, first is the event and the second is the function. 
        //The function can be added inside the argument section also. Knowm as anonimous function.
        document.addEventListener('DOMContentLoaded',function(){
            document.querySelector('button').onclick = count;    
            //document.querySelector('button').addEventListener('click', count); This is an option.
        })
        
        