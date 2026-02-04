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

let s = 3;
let num = (Math.random() * 5) + 1;
num = Math.floor(num);

function checkGuess(){
    let userGuess = Number(document.getElementById("guessInput").value);
    if(userGuess === num){
        alert("Congratulations! You guessed the correct number.");
    }
    else{
        s = s - 1;
        document.querySelector(".progress").style.width = (s * 100) + "px";
        if(s>0){
            document.getElementById("guessResult").textContent = "Wrong guess! Try again.";
            document.getElementById("score").textContent = "Your Current Score: " + s;
        }
        if(s === 0){
            alert("Game Over! You've used all your attempts.");
        }
    }
}

function resetGame() {
    s = 3;

    document.getElementById("guessResult").textContent = "";
    document.getElementById("score").textContent = "Your Current Score: " + s;
    document.getElementById("guessInput").value = "";
    
    let progressBar = document.querySelector(".progress");
    progressBar.style.width = "300px";
    
    num= (Math.floor(Math.random() * 5) + 1);

}