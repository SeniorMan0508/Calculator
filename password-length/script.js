// let userName = 'Ayomide';
// let age = 28;
// const country = 'Nigeria';
// let answer = `My name is ${userName}, I am ${age} years old and I live in ${country}.`;
// console.log(answer);

// let balance = 5000;
// let itemPrice = 3200;
// let purchase = balance - itemPrice;
// let remaining = purchase

// if(itemPrice <= balance){
//     console.log(`Purchase Successful. Balance left: ${remaining}`);
// }else{
//     console.log('Insufficient funds');
// }

// let score = 50;
// let attendance = 80;

// if(score < 0 || score > 100){
//     console.log('Invalid score');
// }else if(score >= 70){
//     console.log('Grade A');
// }else if(score >= 60){
//     console.log('Grade B');
// }else if(score >= 50){
//     console.log('Grade C');
// }else{
//     console.log('Fail');
// }

// if(score >= 50 && attendance >= 75){
//     console.log('Eligible for certificate');
// }else{
//     console.log('Not eligible');
// }

// Part A
// for(i = 0; i <= 10; i++){
//     console.log(i);
// }

// console.log('-------------------');

// //Part B
// for(i = 2; i <= 20; i++){
//     if(i % 2 === 0){
//         console.log(i);
        
//     }
// }

// console.log('-------------------');

// //Part C
// let total = 0;
// for(i = 0; i <= 100; i++){
//     total = total + i;
// }
// console.log(total);

// //Part D
// const prices = [1500, 2300, 800, 4200, 3100]; 
// let bill = 0;
// for(i = 0; i < prices.length; i++){
//     bill = bill + prices[i]
// }
// console.log(`item cost ${prices[0]}`); 
// console.log(`item cost ${prices[1]}`);
// console.log(`item cost ${prices[2]}`); 
// console.log(`item cost ${prices[3]}`);
// console.log(`item cost ${prices[4]}`); 
// console.log(bill );

const password = document.getElementById('password')
const eyes = document.getElementById('eyes')
const range = document.getElementById('range')
const typing = document.getElementById('typing')

password.addEventListener('input', () => {
    const length = password.value.length

    if(length === 0){
       range.style.width = '0'
       typing.textContent = 'Typing...'
    }else if(length < 5){
        range.style.width = '30%'
        range.style.background = 'red'
        typing.textContent = 'weak password'
    }else if(length < 9){
        range.style.width = '60%'
        range.style.background = '#f59e0b'
        typing.textContent = 'Medium Password'
    }else{
        range.style.width = '100%'
        range.style.background = 'green'
        typing.textContent = 'Strong Password'
    }
})

eyes.addEventListener('click', () => {
    if(password.type === 'password'){
        password.type = 'text'
    }else(
        password.type = 'password'
    )
})