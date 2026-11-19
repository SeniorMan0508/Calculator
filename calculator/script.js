const display = document.getElementById('display')
const btn = document.querySelectorAll('.btn')
const ac = document.getElementById('ac')

btn.forEach(function (btns) {
    btns.addEventListener('click', () => {
        const value = btns.textContent;

        if(value === 'AC' || value === 'C'){
            display.value = '';
            ac.textContent = 'AC';
        }else if(value === 'X'){
            display.value = display.value.slice(0, -1)
            ac.textContent = 'AC'
        }else if(value === '='){
            try{
                display.value = eval(display.value)
            } catch (error){
                display.value = 'Error'
            }
        }else{
            const lastNumber = display.value.split(/[+\-*/%]/).pop();

            if(lastNumber === '0' && /[0-9]/.test(value)) {
                display.value = display.value.slice(0, -1) + value;
            }else{
                display.value = display.value + value;
            }

            ac.textContent = 'C';
            
        }
        
    })
})

