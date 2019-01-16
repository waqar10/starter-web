class CarWorld{
  constructor(name, make, price, model, year, description){
    this.name = name;
    this.make = make;
    this.price = price;
    this.model = model;
    this.year = year;
    this.description = description;
  }
}

class AddCar{
  addCarData(car){
    
    let carList = document.getElementById("car-list");
    let tableRow = document.createElement("tr");
    tableRow.innerHTML = `<td>${car.name}</td><td>${car.make}</td><td>${car.price}</td><td>${car.model}</td><td>${car.year}</td><td>${car.description}</td>
    <td><a href="#" class="delete">x</a></td>
    `;
    carList.append(tableRow);

    setItems(car);

    function setItems(car){
      let ls;
      if(localStorage.getItem("ls")===null){
        ls = [];
      }else{
        ls=JSON.parse(localStorage.getItem("ls"));
      }
      ls.push(car);
      localStorage.setItem("items",JSON.stringify(ls));
    }
  }

  delCar(target){
      if(target.className === "delete"){
        target.parentElement.parentElement.remove();
      }
  }

  clearInputs(){
    document.getElementById("name-input").value= "";
    document.getElementById("make-input").value= "";
    document.getElementById("model-input").value= "";
    document.getElementById("price-input").value= "";
    document.getElementById("year-input").value= "";
    document.getElementById("description-input").value= "";
  }

}

class Store{
  static setItems(car){
    let ls;
    if(localStorage.getItem("ls")===null){
      ls = [];
    }else{
      ls=JSON.parse(localStorage.getItem("ls"));
    }
    ls.push(car);
    localStorage.setItem("items",JSON.stringify(ls));
  }
  static removeCar(){
    let cars = Store.setItems();
    cars.forEach(function(car, arrayIndex){
      cars.splice(arrayIndex,1);
    });
    localStorage.setItem("items",JSON.stringify(ls));
  }
}

document.getElementById("car-form").addEventListener("submit", function(e){
  let name = document.getElementById("name-input").value;
  let make = document.getElementById("make-input").value;
  let price = document.getElementById("price-input").value;
  let model = document.getElementById("model-input").value;
  let year = document.getElementById("year-input").value;
  let description = document.getElementById("description-input").value;
  
  let car = new CarWorld(name, make, price, model, year, description);
  
  let add = new AddCar();
  
  if(name === ""){
    alert("Please fill the form");
  }else{
    add.addCarData(car);
  }
  add.clearInputs();
  e.preventDefault();
});

document.getElementById("car-list").addEventListener("click",function(e){
  let add = new AddCar(e);
  add.delCar(e.target);
  Store.removeCar(e.target.parentElement.previousElementSibiling.innerHTML);
  // console.log("hello");
  e.preventDefault();
});