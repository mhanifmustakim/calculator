//FUNCTIONS
/**************************************************************** */
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (operation, num1, num2) => {
    switch (operation) {
        case "add":
            return add(num1, num2);
        case "subtract":
            return subtract(num1, num2);
        case "multiply":
            return multiply(num1, num2);
        case "divide":
            return divide(num1, num2);
    }
};

const printNum = (e) => {
    if (calcDisplay.textContent == "0" && e.target.innerText == "0") {
        return
    }
    if (calcDisplay.textContent.indexOf(".") != -1 && e.target.innerText == ".") {
        return
    }
    if (calcDisplay.textContent == "0" || parseFloat(calcDisplay.textContent) == result) {
        calcDisplay.textContent = e.target.innerText;
    } else {
        calcDisplay.textContent += e.target.innerText;
    }
}

const saveFirst = (e) => {
    num1 = parseFloat(calcDisplay.textContent);
    calcDisplay.textContent = "0";
    operation = e.target.classList[2];
}

const returnResult = () => {
    num2 = parseFloat(calcDisplay.textContent);
    result = operate(operation, num1, num2);
    if (result * 100 % 100 !== 0) {
        result = result.toFixed(2);
    }
    calcDisplay.textContent = result;
    [num1, num2] = [result, 0];
    operation = null;
}

//ACTUAL CODE
/***************************************************/
const calcDisplay = document.querySelector("#calc-disp");
const nums = document.querySelectorAll(".num-btn");
const operations = document.querySelectorAll(".operation-btn");
const equalToBtn = document.querySelector(".equalTo-btn");

let num1 = null;
let num2 = null;
let result = null;
let operation = null;
calcDisplay.textContent = "0";

nums.forEach(num => num.addEventListener("click", printNum))

operations.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if (operation === null) {
            saveFirst(e);
        } else {
            returnResult();
            operation = e.target.classList[2];
        }
    })
})

equalToBtn.addEventListener("click", returnResult);



