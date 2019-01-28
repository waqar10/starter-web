/*
Rest API
*/
//USING CALLBACKS
document.querySelector(".click-btn").addEventListener('click',function(e){
  let userInput = document.querySelector(".rep-input").value;

if(userInput == ""){
  alert("input must be filled with user name");
}else{
    class Myhttp {
    constructor() {
    this.http = new XMLHttpRequest();
    }
    getPost(cb, url) {
        this.http.open("GET", url, true);
        this.http.onload = () => {
        if(this.http.status === 200){
        cb(this.http.responseText);
        let repo =[]
        repo = JSON.parse (this.http.responseText)
        let repos = repo.map(item => item.name);
        repos.forEach(element =>{
          let list = document.querySelector("ul");
          let li = document.createElement("li");
          li.style.fontSize = "1.2rem";
          li.style.display = "flex";
          // li.style.justifyContent = "space-evenly";
          li.innerHTML=element
          list.appendChild(li);
        });
        // console.log(item.name);
        }else if(this.http.status === 500){
          alert("Check internet or for You Server");
        }else{
          alert("Something Went Wrong");
        }
      };
      this.http.send();
    }
  } 
  const obj = new Myhttp();

obj.getPost( response => console.log(response),`https://api.github.com/users/${userInput}/repos`)
}
e.preventDefault();
  });