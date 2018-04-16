const myAssignment = document.getElementById("myAssignment");
let myAnswer = document.getElementById('myAnswer');
let antwoord;
let sound = new Audio()

function makeSum(){
  let number1 = Math.floor(Math.random()*9)+1;
  let number2 = Math.floor(Math.random()*9)+1;
  antwoord = number1 * number2;
  myAssignment.innerHTML = number1 + " X " + number2 + " = " + " ? ";
  /*myAnswer.value="";
  myAnswer.focus();*/
}


makeSum();

function keyPressed(evt)
{
    if(evt.keyCode == 13)
    {
      if (myAnswer.value == antwoord)
      {
        myAssignment.innerHTML = "Goed!";
        feedback.src = "img/Goed.png"
        sound.src = "sound/True.wav";
        sound.play();
      }
        else
        {
          myAssignment.innerHTML = "Fout!";
          feedback.src = "img/Fout.png"
          sound.src = "sound/False.wav";
          sound.play();
        }
      window.setTimeout(waiting, 2000)
    }
  }



function waiting(){
  feedback.src = "img/Niks.png";
  myAnswer.value = "";
  makeSum();
}

addEventListener("keydown", keyPressed, false);
