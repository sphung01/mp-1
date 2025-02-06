//PROGRAM


//VARIABLES
const DecreaseBtn = document.getElementById("Decrease");
const ResetBtn = document.getElementById("Reset");
const IncreaseBtn = document.getElementById("Increase");
const NumberLabel = document.getElementById("Number");
let count = 0;


//FUNCTIONALITY
DecreaseBtn.onclick = function(){
    count --;
    NumberLabel.textContent = count;
}

IncreaseBtn.onclick = function(){
    count ++;
    NumberLabel.textContent = count;
}

ResetBtn.onclick = function(){
    count = 0;
    NumberLabel.textContent = count;
}
