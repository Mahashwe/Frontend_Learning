function adding(){
    let input1 = Number(document.getElementById("input1").value);
    let input2 = Number(document.getElementById("input2").value);
    const answer = input1 + input2;

    document.getElementById("result").textContent = "The result is " + answer;
}

function diff(){
    let input1 = Number(document.getElementById("input1").value);
    let input2 = Number(document.getElementById("input2").value);
    const answer = input1 - input2;
    document.getElementById("result").textContent = "The result is " + answer;
}

function multiply(){
    let input1 = Number(document.getElementById("input1").value);
    let input2 = Number(document.getElementById("input2").value);
    const answer = input1 * input2;
    document.getElementById("result").textContent = "The result is " + answer;
}   

function divide(){
    let input1 = Number(document.getElementById("input1").value);
    let input2 = Number(document.getElementById("input2").value);
    const answer = input1 / input2;
    document.getElementById("result").textContent = "The result is " + answer;
}