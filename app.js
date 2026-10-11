/*-------------------------------- Constants --------------------------------*/

const display = document.querySelector(".display");

const numBtns = document.querySelectorAll(".number");

const operatorBtns = document.querySelectorAll(".operator");

const equalBtn = document.querySelector(".equals");

const calculator = document.querySelector("#calculator")

/*-------------------------------- Variables --------------------------------*/

let result = null
let num1 = null
let num2 = null
let operator = null

/*------------------------ Cached Element References ------------------------*/
console.log(display)
console.log(numBtns)
console.log(operatorBtns)
console.log(equalBtn)
/*----------------------------- Event Listeners -----------------------------*/

equalBtn.addEventListener('click', handleClickEqual)

numBtns.forEach((button) => {
    button.addEventListener('click', handleClickNumber)
})

operatorBtns.forEach((button) => {
    button.addEventListener('click', handleClickOperator)
})

/*-------------------------------- Functions --------------------------------*/

function handleClickNumber(event) {
    console.log(event.target.textContent)

    if (!num1 && !num2 && !operator) {
        num1 = event.target.textContent
        display.textContent = num1
    }
    else if (num1 && !num2 && !operator) {
        num1 += event.target.textContent
        display.textContent = num1
    }
    else if (num1 && !num2 && operator) {
        num2 = event.target.textContent
        display.textContent = num2
    }
    else if (num1 && num2 && operator) {
        num2 += event.target.textContent
        display.textContent = num2
    }
    //console.log("Number 1: " + num1 + ", Number 2: " + num2)
}

function handleClickOperator(event) {
    console.log(event.target.textContent)

    if (event.target.textContent === "C") {
        num1 = null
        num2 = null
        operator = null
        display.textContent = " "
        console.log("clear clicked")
    }
    else if (num1 && !num2 && !operator) {
        operator = event.target.textContent
        display.textContent = operator
    }

}

function handleClickEqual(event) {
    console.log("CLICKED Equal")

    if (operator === '+') {
        result = Number(num1) + Number(num2)
        display.textContent = result
    }
    else if (operator === '-') {
        result = Number(num1) - Number(num2)
        display.textContent = result
    }
    else if (operator === '*') {
        result = Number(num1) * Number(num2)
        display.textContent = result
    }
    else if (operator === '/') {
        result = Number(num1) / Number(num2)
        display.textContent = result
    }

}


