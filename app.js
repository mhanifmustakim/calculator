//FUNCTIONS
/**************************************************************** */
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (num2 == 0) {
        alert("Do Not Divide By Zero Please");
        return "error";
    }
    return a / b;
};

const operate = (operation, num1, num2) => {
    switch (operation) {
        case "add":
        case "+":
            return add(num1, num2);
        case "subtract":
        case "-":
            return subtract(num1, num2);
        case "multiply":
        case "*":
            return multiply(num1, num2);
        case "divide":
        case "/":
            return divide(num1, num2);
    }
};

const printNum = (e) => {
    if (calcDisplay.textContent.length == 10) {
        alert("Sorry, this calc only supports 10 digit operations!")
        return
    }
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
    delBtn.disabled = false;
}

const saveFirst = (e) => {
    num1 = parseFloat(calcDisplay.textContent);
    calcDisplay.textContent = "0";
    operation = e.target.classList[2];
}

const returnResult = () => {
    num2 = parseFloat(calcDisplay.textContent);
    result = operate(operation, num1, num2);
    if (result === "error") {
        reset();
        return
    }
    if (result * 100 % 100 !== 0) {
        result = result.toFixed(2);
    }
    calcDisplay.textContent = result;
    [num1, num2] = [result, 0];
    operation = null;
    delBtn.disabled = true;
}

const reset = () => {
    calcDisplay.textContent = "0";
    delBtn.disabled = false;
    num1 = null;
    num2 = null;
    result = null;
    operation = null;
}

const saveNum = (e) => {
    if (operation === null) {
        saveFirst(e);
    } else {
        returnResult();
        operation = e.target.classList[2];
    }
}

const deleteNum = () => {
    if (parseFloat(calcDisplay.textContent) / 10 < 1) {
        calcDisplay.textContent = "0";
    } else {
        calcDisplay.textContent = calcDisplay.textContent.substring(0, calcDisplay.textContent.length
            - 1);
    }
}
//ACTUAL CODE
/***************************************************/
const calcDisplay = document.querySelector("#calc-disp");
const nums = document.querySelectorAll(".num-btn");
const operations = document.querySelectorAll(".operation-btn");
const equalToBtn = document.querySelector(".equalTo-btn");
const clearBtn = document.querySelector(".clear-btn");
const delBtn = document.querySelector(".delete-btn");

let num1 = null;
let num2 = null;
let result = null;
let operation = null;
calcDisplay.textContent = "0";

//EVENT LISTENERS
nums.forEach(num => num.addEventListener("click", printNum))

operations.forEach(btn => {
    btn.addEventListener("click", saveNum)
})

equalToBtn.addEventListener("click", returnResult);

clearBtn.addEventListener("click", reset)

delBtn.addEventListener("click", deleteNum)
//KEYBOARD SUPPORT
window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case ".":
            printNumKey(e.key)
            break
        case "*":
        case "/":
        case "+":
        case "-":
            operationKey(e.key)
            break
        case "Enter":
        case "=":
            returnResult()
            break;
        case "Backspace":
            deleteNum()
            break;
        case "c":
        case "Delete":
        case "Escape":
            reset();
    }

    function printNumKey(char) {
        if (calcDisplay.textContent.length == 10) {
            alert("Sorry, this calc only supports 10 digit operations!")
            return
        }
        if (calcDisplay.textContent == "0" && char == "0") {
            return
        }
        if (calcDisplay.textContent.indexOf(".") != -1 && char == ".") {
            return
        }
        if (calcDisplay.textContent == "0" || parseFloat(calcDisplay.textContent) == result) {
            calcDisplay.textContent = char;
        } else {
            calcDisplay.textContent += char;
        }
        delBtn.disabled = false;
    }

    function operationKey(char) {
        if (operation === null) {
            num1 = parseFloat(calcDisplay.textContent);
            calcDisplay.textContent = "0";
            operation = char;
        } else {
            returnResult();
            operation = char;
        }
    }
})

