
/*
*1-14-2018*
*Constructors in OOP*
*OOP ES5 Constructor TODO list
*/
// Object Constructors
function person(fName, lName, age, address){
    this.firstName = fName;
  this.lastName = lName;
  this.age = age;
  this.resident = "jutial";
  this.address = address;
  this.fullAddress =function(){
      return this.resident+" "+this.address;
  };
}
// Object Types
let empOne = new person("Waqar","Ali Khan",24,"Gilgit");
let empTwo = new person("Masroor","Ali Khan",23,"Gilgit");
// console.log(empTwo.age);

// Proto types
person.prototype.fullName = function(fName,lName){
    // let fNam = this.firstName;
    // let lNam = this.lastName;
    // console.log(fNam+lNam);
    return `full Name is: ${this.firstName+" "+this.lastName}`;
};

console.log(empTwo.fullName()
);

/*=========================  task oop todo list ===================================*/
let myBtn = document.getElementById("addBtn");
let myInput = document.getElementById("input");
function TODO(){
  
}

TODO.prototype.AddItems = function(){
  let outputText = myInput.value;
  if(outputText !=""){
    let ol = document.getElementById("orderList");
    let liOne = document.createElement("li");
    liOne.className = ("items");
    let btnRem = document.createElement("button");
    btnRem.className = "btn btn-danger rem-btn";
    btnRem.textContent = "X";
    btnRem.style.display = "inline-flex";
    btnRem.style.justifyContent = "space-evenly";
    btnRem.style.height ="1.5rem";
    btnRem.style.width ="1.5rem";
    btnRem.style.lineHeight ="0rem";
    
    let text = document.createTextNode(outputText);
    ol.appendChild(liOne);
    liOne.appendChild(text);
    liOne.appendChild(btnRem);
    myInput.value="";
  }
  else{
    alert("Input must not be empty");
  }
  TODO.prototype.RemoveItem = function(){
  // Clear single li Item
  document.body.addEventListener("click",function(e){
    // console.log(e.target);
    if(e.target.parentElement.classList.contains("items")){
    e.target.parentElement.remove();
  }
  });
}
}
myBtn.addEventListener('click',function(){
  // AddItems
  add = new TODO();
  add.AddItems();
  //RemoveItem
  rem = new TODO();
  rem.RemoveItem();
  //RemoveItems
  remove = new TODO();
  remove.RemoveAllItems();
});
 
  // Clear All Tasks
  TODO.prototype.RemoveAllItems = function(){
    document.body.addEventListener("click",function(c){
      if(c.target.id==="clear-btn"){
        console.log(c.target)
      //  console.dir( c.target.previousElementSibling.children);
      let items=document.querySelectorAll(".items");
      console.log(items)
      for(let i=0; i<items.length; i++){
      items[i].remove();
    }
    }
    });
  }
  

