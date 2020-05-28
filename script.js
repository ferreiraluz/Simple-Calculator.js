// return refresh in the page

function refresh() {
    window.location.reload();
}

function submit() {
    // getting the strings 
    const n1 = document.getElementById("val1");
    const n2 = document.getElementById("val2");
    const result = document.getElementById("res");
    const operators = document.getElementById("operator");

    // converting from string to number
    const val1 = Number(n1.value);
    const val2 = Number(n2.value);

    // running the program

    const calculations = {
        plus: val1 + val2, 
        sub: val1 - val2, 
        multi: val1 * val2,
        divi: val1 / val2
    }

   if(operators.value == "+"){
       result.innerHTML = calculations.plus;
   }else if(operators.value == "-"){
       result.innerHTML = calculations.sub;
   }else if(operators.value == "*"){
       result.innerHTML = calculations.multi;
   }else if(operators.value == "/"){
       result.innerHTML = calculations.divi;
   }
}