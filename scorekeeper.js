var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var resetbutton = document.querySelector("#r");
var p1dis = document.querySelector("#p1dis");
var p2dis = document.querySelector("#p2dis");
var h1 = document.querySelector("h1");
var numinput = document.querySelector("input");
var p = document.querySelector("p");
var winningscoredisplay = document.querySelector("p span");
var p1score = 0;
var p2score = 0;
var gameover = false;
var winningscore = 5;
p1button.addEventListener("click",function(){
if(!gameover){
  p1score++;
  if(p1score == winningscore){
    p1dis.classList.add("winner");
    gameover = true;
  }
  p1dis.textContent = p1score;
  }
});
p2button.addEventListener("click",function(){
  if(!gameover){
    p2score++;
    if(p2score == winningscore){
      p2dis.classList.add("winner");
      gameover = true;
    }
  p2dis.textContent = p2score;
  }
});
resetbutton.addEventListener("click",function(){
  p1score = 0;
  p2score = 0;
  p1dis.textContent = 0;
  p2dis.textContent = 0;
  p1dis.classList.remove("winner");
  p2dis.classList.remove("winner");
  gameover = false;
});
numinput.addEventListener("change",function(){
  winningscoredisplay.textContent = numinput.value;
  winningscore = numinput.value;

});
