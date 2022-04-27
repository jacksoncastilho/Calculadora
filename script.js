// var nove = document.querySelector("#nove"),
//     oito = document.querySelector("#oito"),
//     sete = document.querySelector("#sete"),
//     seis = document.querySelector("#seis"),
//     cinco = document.querySelector("#cinco"),
//     quatro = document.querySelector("#quatro"),
//     tres = document.querySelector("#tres"),
//     dois = document.querySelector("#dois"),
//     um = document.querySelector("#um"),

//     multiplicacao = document.querySelector("#multiplicacao"),
//     subtracao = document.querySelector("#subtracao"),
//     soma = document.querySelector("#soma"),
//     igual = document.querySelector("#igual");



function el(element) {
    if (element.charAt(0) === '#') {
        return document.querySelector(element);
    }
    return document.querySelectorAll(element);
}

var viewer = el("#visor"), // Calculator screen where result is displayed
    // equals = el("#equals"), // Equal button
    nums = el(".numero"), // List of numbers
    ops = el(".operador"), // List of operators
    theNum = "", // Current number
    oldNum = "", // First number
    resultNum; // Result
// operator; // Batman

function setNum() {
    if (resultNum) { // If a result was displayed, reset number
        theNum = this.getAttribute("data-num");
        resultNum = "";
    } else { // Otherwise, add digit to previous number (this is a string!)
        theNum += this.getAttribute("data-num");
    }

    viewer.innerHTML = theNum; // Display current number

};

// Add click event to numbers
for (let i = 0, l = nums.length; i < l; i++) {
    nums[i].onclick = setNum;
}

for (let i = 0, l = ops.length; i < l; i++) {
    ops[i].onclick = set
}