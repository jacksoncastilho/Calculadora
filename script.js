var viewer = el("#visor"), // Calculator screen where result is displayed
    igual = el("#igual"), // Equal button
    nums = el(".numero"), // List of numbers
    ops = el(".operador"), // List of operators
    theNum = "", // Current number
    oldNum = "", // First number
    resultNum, // Result
    operador, // Batman
    resetAC = el("#resetAC"),
    resetC = el("#resetC");

// Add click event to numbers
for (let i = 0, l = nums.length; i < l; i++) {
    nums[i].onclick = setaNumero;
}

for (let i = 0, l = ops.length; i < l; i++) {
    ops[i].onclick = setaOperador;
}

igual.onclick = calcula;

resetAC.onclick = calculadoraResetAC;

resetC.onclick = calculadoraResetC;

function el(element) {
    if (element.charAt(0) === '#') {
        return document.querySelector(element);
    }
    return document.querySelectorAll(element);
}

function setaNumero() {
    if (resultNum) { // If a result was displayed, reset number
        theNum = this.getAttribute("data-num");
        resultNum = "";
    } else { // Otherwise, add digit to previous number (this is a string!)
        if (theNum.length < 9) {
            theNum += this.getAttribute("data-num");
        }
    }

    viewer.innerHTML = theNum; // Display current number

}

function setaOperador() {
    oldNum = theNum;
    theNum = "";
    operador = this.getAttribute("data-ops");

}

function calcula() {
    if (operador) { //Pode ser que seja clicado no "=" sem ter valor
        oldNum = parseFloat(oldNum);
        theNum = parseFloat(theNum);

        switch (operador) {
            case "multiplicacao":
                resultNum = oldNum * theNum;
                break;
            case "subtracao":
                resultNum = oldNum - theNum;
                break;
            case "soma":
                resultNum = oldNum + theNum;
                break;
            case "divisao":
                resultNum = oldNum / theNum;
                break;
            default:
                resultNum = theNum;
        }

        if (String(resultNum).length > 8) {
            alert('ERR: Operação maior que 8 digitos');
            calculadoraResetAC();
        } else {
            viewer.innerHTML = resultNum;
            oldNum = "0";
            theNum = resultNum;
            operador = "";
        }
    }
}

function calculadoraResetAC() {
    viewer.innerHTML = "0";
    theNum = "";
    oldNum = "";
    resultNum = "";
    operador = "";
}

function calculadoraResetC() {
    viewer.innerHTML = "0";
    theNum = "";
}