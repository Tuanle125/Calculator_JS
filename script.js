const button = document.querySelectorAll(".button-54");
const expression = document.querySelector("#expression");
const result = document.querySelector("#result");

document.addEventListener("DOMContentLoaded", () => {
    button.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const text = e.target.innerHTML;
            const lengh = expression.innerHTML.length;
            const ex = expression.innerHTML.charAt(lengh-2);

            if(text >= "0" && text <= "9") {
                expression.innerHTML += e.target.innerHTML;
                return;
            }
            if(text == "Clr") {
                expression.innerHTML = "";
                result.innerHTML = "";
                return;
            }
            if(text == "Del") {
                const range = expression.innerHTML.charAt(lengh-1) == " " ? -3 : -1;
                expression.innerHTML = expression.innerHTML.slice(0, range);
                result.innerHTML = "";
                return;
            }
            
            
            if (lengh != 0) {     
                if( ex == "+" || ex == "-" || ex == "x" || ex == "/") {
                    let arr = expression.innerHTML.split("");
                    arr[lengh-2] = text;
                    expression.innerHTML = arr.join("");
                }
                else expression.innerHTML += ` ${text} `;
            }

        });
    });
});
