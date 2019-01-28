/*
Rest API
*/
//USING ASYNC AWAIT
document.querySelector(".click-btn").addEventListener('click',function(e){
  let userInput = document.querySelector(".rep-input").value;

if(userInput == ""){
  alert("input must be filled with user name");
}else{
  const getPost = async url =>{
    const res = await fetch(url);
    return await res.json();
    
  };

  getPost(`https://api.github.com/users/${userInput}/repos`)
  .then(res => res.map(result => result.name))
  .then(respos => respos.forEach(element => {
    let list = document.querySelector("ol");
    let li = document.createElement("li");
    li.style.textAlign = "left";
    li.style.fontSize = "1.1rem";
    li.innerHTML = element
    list.appendChild(li);
  }))
  .then(res => console.log(res));
  e.preventDefault();
}
});