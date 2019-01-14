document.querySelector(".div-one").addEventListener("click",function(eventOne){
  document.getElementById("div-one").style.backgroundColor="#384565";
  // eventOne.stopPropagation();
  console.log("Box one");
});
document.querySelector(".div-two").addEventListener("click",function(eventTwo){
  document.getElementById("div-two").style.backgroundColor="#e27f3b";
  // eventTwo.stopPropagation();
  console.log("Box two");
});
document.querySelector(".div-three").addEventListener("click",function(eventThree){
  document.getElementById("div-three").style.backgroundColor="#20716a";
  eventThree.stopPropagation();
  console.log("Box three");

});