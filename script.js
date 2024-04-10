let firstNumber = ''
let secondNumber = ''
let operator = ''
const screen = document.querySelector('.screen')
const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const clears = document.querySelector('.clear')
const equals = document.querySelector('.equal')
const decimals = document.querySelector('.decimal')

let firstNumberScreen = document.querySelector('.first')
let secondNumberScreen = document.querySelector('.second')
numbers.forEach(button => {
   button.addEventListener('click', function(e){
      handleNumber(e.target.textContent) 
              
   })
});
function handleNumber(number){
   if(secondNumber.length <= 7){
      secondNumber += number
      secondNumberScreen.textContent = secondNumber
   }
}

operators.forEach(button => {
   button.addEventListener('click', function(e){
      handleOperator(e.target.textContent)
      
   })
})
function handleOperator(ope){
   operator = ope
   firstNumber = secondNumber
   secondNumber = ''
   firstNumberScreen.textContent = firstNumber + " " + operator
   secondNumberScreen.textContent = secondNumber
   
   
}

equals.addEventListener('click', function(){
   if(secondNumber != '' && firstNumber != ''){

    console.log(operate(operator, firstNumber , secondNumber)) 
    firstNumberScreen.textContent = ''
     if(firstNumber.length <= 5){
      secondNumberScreen.textContent = firstNumber
     }else{
      secondNumberScreen.textContent = firstNumber.slice(0.5) + "...."
     }
   }
})

decimals.addEventListener('click', function(){
    addDecimal()
})

clears.addEventListener('click', (e) => {
   screen.textContent = ''
})







function add(firstNumber, secondNumber){
 return (firstNumber += secondNumber)
}

////
function subtract(firstNumber, secondNumber){
  return (firstNumber -= secondNumber)
}
////
function multiply(firstNumber, secondNumber){
   return (firstNumber *= secondNumber)
}
/////
function divide(firstNumber, secondNumber){
   return firstNumber /= secondNumber
}


function operate(operator, firstNumber , secondNumber){
   firstNumber  = Number(firstNumber)
   secondNumber = Number(secondNumber)
   if(operator === '+'){
     (add(firstNumber, secondNumber))  
   }else if (operator === '-') {
      console.log(subtract(firstNumber, secondNumber))
   } else if(operator === '*') {
      console.log(multiply(firstNumber, secondNumber))
   }else if(operator === '/'){
      console.log(divide(firstNumber, secondNumber))
   }
   firstNumber = roundNumber(firstNumber)
   firstNumber = firstNumber.toString()
   secondNumber = firstNumber.toString()
}
function roundNumber(num){
   return Math.round(num *1000) / 1000
}


function addDecimal(){
   if(!secondNumber.includes(".")){
        secondNumber += '.'
   }
}
