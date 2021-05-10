const calcDisplay = document.querySelector("#calc-disp");
const nums = document.querySelectorAll(".num-btn");

calcDisplay.textContent = "";
nums.forEach(num => num.addEventListener("click", (e) => {
    if (calcDisplay.textContent == "0" && e.target.innerText == "0") {
        return
    }
    if (calcDisplay.textContent.indexOf(".") != -1 && e.target.innerText == ".") {
        return
    }
    calcDisplay.textContent += e.target.innerText;
}))




//FUNCTIONS
/**************************************************************** */
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (operation, num1, num2) => operation(num1, num2);