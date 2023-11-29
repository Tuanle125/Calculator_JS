const button = document.querySelectorAll(".button-54");
const expression = document.querySelector("#expression");
const result = document.querySelector("#result");

document.addEventListener("DOMContentLoaded", () => {

    button.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const exp = expression.innerHTML;
            const key = e.target.innerHTML;
            const length = expression.innerHTML.length;
            const operator = getOperator(exp);

            if(key == "."){
                if(length == 0) {
                    expression.innerHTML = "0.";
                    return;
                }
                let arr = expression.innerHTML.split(" ");
                console.log(arr);
                if(arr[arr.length-1].indexOf('.') == -1) {
                    const dot = arr[arr.length-1].length == 0 ? "0." : ".";
                    arr[arr.length-1] += dot;
                    expression.innerHTML = arr.join(" ");
                }
                return;
            }
            if(key >= "0" && key <= "9") {
                expression.innerHTML += e.target.innerHTML;
                return;
            }
            if(key == "Clr") {
                expression.innerHTML = "";
                result.innerHTML = "";
                return;
            }
            if(key == "Del") {
                const range = expression.innerHTML.charAt(length-1) == " " ? -3 : -1;
                expression.innerHTML = expression.innerHTML.slice(0, range);
                result.innerHTML = "";
                return;
            }
            if(key == "=") {
                if(isOperator(operator)) {
                    result.innerHTML = calculate(exp);
                }
                return;
            }
            
    
            if(isOperator(operator) && length != 0) {
                const re = calculate(exp);
                expression.innerHTML = "";
                result.innerHTML = "";
                expression.innerHTML = re + ` ${key} `;
            }
            else if (length != 0) expression.innerHTML += ` ${key} `;
            
            
        });
    });
});

const isOperator = (op) => {
    return op == "+" || op == "-" || op == "x" || op == "/";
};
const getOperator = (str) => {
    let arr = str.split("");
    for(let char of arr){
        if(isOperator(char)) return char;
    }
};
const calculate = (ex) => {
    const arr = ex.split(" ");
    console.log(Number(arr[0]) + " - "+ Number(arr[2]));
    switch (arr[1]) {
        case '+': return Math.round((Number(arr[0]) + Number(arr[2])) * 1000)/1000;
        case '-': return Math.round((Number(arr[0]) - Number(arr[2])) * 1000)/1000;
        case 'x': return Math.round((Number(arr[0]) * Number(arr[2])) * 1000)/1000;
        case '/': return Math.round((Number(arr[0]) / Number(arr[2])) * 1000)/1000;
        default: return "Don't have operator";
    }
};