function additionBtn(){
    let firstNum = document.getElementById("firstInput").value;
    let secondNum = document.getElementById("secondInput").value;
    let answer = Number(firstNum) + Number(secondNum);


    if(isNaN(firstNum) || isNaN(secondNum)){
        document.getElementById("outputText").style.color = "firebrick";
        document.getElementById("outputText").innerHTML = "Error: One or both of your inputs is not a number";
    } else if(answer < 0){
        document.getElementById("outputText").style.color = "firebrick";
        document.getElementById("outputText").innerHTML = answer;
    }
    else {
        document.getElementById("outputText").style.color = "black"
        document.getElementById("outputText").innerHTML = answer;
    }
    
}

function subtractionBtn(){
    let firstNum = document.getElementById("firstInput").value;
    let secondNum = document.getElementById("secondInput").value;
    let answer = Number(firstNum) - Number(secondNum);

    if(isNaN(firstNum) || isNaN(secondNum)){
        document.getElementById("outputText").style.color = "firebrick";
        document.getElementById("outputText").innerHTML = "Error: One or both of your inputs is not a number";
    } else if(answer < 0){
        document.getElementById("outputText").style.color = "firebrick";
        document.getElementById("outputText").innerHTML = answer;
    }
    else {
        document.getElementById("outputText").style.color = "black"
        document.getElementById("outputText").innerHTML = answer;
    }

}

function multiplicationBtn(){
    let firstNum = document.getElementById("firstInput").value;
    let secondNum = document.getElementById("secondInput").value;
    let answer = Number(firstNum) * Number(secondNum);

    if(isNaN(firstNum) || isNaN(secondNum)){
        document.getElementById("outputText").style.color = "firebrick";
        document.getElementById("outputText").innerHTML = "Error: One or both of your inputs is not a number";
    } else if(answer < 0){
        document.getElementById("outputText").style.color = "firebrick";
        document.getElementById("outputText").innerHTML = answer;
    }
    else {
        document.getElementById("outputText").style.color = "black"
        document.getElementById("outputText").innerHTML = answer;
    }
}

function divisionBtn(){
    let firstNum = document.getElementById("firstInput").value;
    let secondNum = document.getElementById("secondInput").value;
    let answer = Number(firstNum) / Number(secondNum);

    if(isNaN(firstNum) || isNaN(secondNum)){
        document.getElementById("outputText").style.color = "firebrick";
        document.getElementById("outputText").innerHTML = "Error: One or both of your inputs is not a number";
    } else if(answer < 0){
        document.getElementById("outputText").style.color = "firebrick";
        document.getElementById("outputText").innerHTML = answer;
    }
    else {
        document.getElementById("outputText").style.color = "black"
        document.getElementById("outputText").innerHTML = answer;
    }
    
}

function exponentBtn(){
    let firstNum = document.getElementById("firstInput").value;
    let secondNum = document.getElementById("secondInput").value;

    //We will loop depending on second input
    //If it is 2 for example, the first input will multiply itself 2 times

    //Case 1: If the power is 0, then answer is 1
    //Case 2: If the power is negative, then answer is inversed
    //Case 3: Otherwise if power is positive and > 0, then go to loop


    if(isNaN(firstNum) || isNaN(secondNum)){
        document.getElementById("outputText").style.color = "firebrick";
        document.getElementById("outputText").innerHTML = "Error: One or both of your inputs is not a number";
    } else if(Number(secondNum) == 0){
        document.getElementById("outputText").style.color = "black"
        document.getElementById("outputText").innerHTML = 1;
    } else if(Number(secondNum) < 0){
        let answer = Number(firstNum);
        for(let i = 1; i < -Number(secondNum); i++){
            answer = answer * Number(firstNum);
        }

        if(Number(firstNum) < 0){
            document.getElementById("outputText").style.color = "firebrick";
            document.getElementById("outputText").innerHTML = "-1/"+ -answer;
        } else {
            document.getElementById("outputText").style.color = "black"
            document.getElementById("outputText").innerHTML = "1/"+ answer;
        }
    } else {
        let answer = Number(firstNum);
        for(let i = 1; i < Number(secondNum); i++){
            answer = answer * Number(firstNum);
        }
        document.getElementById("outputText").style.color = "black"
        document.getElementById("outputText").innerHTML = answer;
    }

}

function clearBtn(){
    let firstNum = document.getElementById("firstInput");
    let secondNum = document.getElementById("secondInput");

    firstNum.value = "";
    secondNum.value = "";

    document.getElementById("outputText").innerHTML = "";
}