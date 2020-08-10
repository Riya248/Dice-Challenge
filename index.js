// Left dice
var randomnumber1 = (Math.random() * 6);
randomnumber1 = (Math.floor(randomnumber1))+1;
var randomImage1 = "images/dice"+ randomnumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImage1);

// right dice
var randomnumber2= (Math.random()*6);
randomnumber2= (Math.floor(randomnumber2))+1;
var randomImage2 = "images/dice"+ randomnumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

if(randomnumber1>randomnumber2){
  document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(randomnumber2>randomnumber1){
  document.querySelector("h1").innerHTML="Player 2 wins";
}
else{
  document.querySelector("h1").innerHTML=" Match Draw";
}
