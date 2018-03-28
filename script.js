const myAssignment = document.getElementById("myAssignment");
let myAnswer = document.getElementById('myAnswer');
let antwoord;


function makeSum(){
  let number1 = Math.floor(Math.random()*9)+1;
  let number2 = Math.floor(Math.random()*9)+1;
  antwoord = number1 * number2;
  myAssignment.innerHTML = number1 + " X " + number2 + " = " + " ? ";
  myAnswer.value="";
  myAnswer.focus();
}


makeSum();

function keyPressed(evt){
    if(evt.keyCode == 13){
      console.log('hoi');
      if (myAnswer.value == antwoord) {
        myAssignment.innerHTML = "Goed!";
      }
        else{
          myAssignment.innerHTML = "Fout!";
        }
      window.setTimeout(waiting, 2000)
    }
  }



function waiting(){
  makeSum();
}

addEventListener("keydown", keyPressed, false);
