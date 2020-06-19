/////////////////////////////
/// User Interface Logic. ///
/////////////////////////////
$(document).ready(function () {
  // Wait until Ready
  $("form#orderPizza").submit(function (event) {
    // Only activates on submit
    event.preventDefault(); // Stops black magic

    let clientName = $(".userName").val(); // Takes input and converts to a variable for use
    console.log(clientName); // Debug

    let pizzaSize = $("input:radio[name=pizzaSize]:checked").val(); // Takes the size selection and converts to a variable
    // console.log(pizzaSize); // Debug

    let toppings = []; // Creates empty Array for use below
    $("input:checkbox[name=toppings]:checked").each(function () {
      // *simple* array/checkbox
      const toppingsList = $(this).val(); // Just takes results of each checkbox
      toppings.push(toppingsList); // Pushes results into array
    }); // Somehow the simplest option I found to put each topping into the array.
    // console.log(toppings); // Debug

    let pizzaPie = new Pizza(pizzaSize, toppings); // Takes created variables above and uses to make object using constructor Pizza
    // console.log(pizzaPie); // Debug

    let resultHold = pizzaPie.calculate();
    // console.log(resultHold + " this is result");

    $(".nameResult").text("Hello, " + clientName + ", thank you for ordering!"); // Takes name, thanks name.
  });
});

///////////////////////////
////  Business Logic.  ////
///////////////////////////

function Pizza(size, toppings) {
  // Confusion begins
  this.size = size; // Takes size parameter and assigns as size
  this.toppings = toppings; // Takes toppings parameter and calls it toppings
}

///Brute Force Solution/// (note-failing)

Pizza.prototype.calculate = function () {
  let size = this.size
  let toppings = this.toppings
  // console.log(toppings)
  // console.log(size)
let pizzaSizePrice = []
let toppingsPrice = []
////////////////////////////////////////
  if (size === "smallSize") {
    pizzaSizePrice.push(5);
  } else if (size === "mediumSize") {
    pizzaSizePrice.push(6.5);
  } else if (size === "largeSize") {
    pizzaSizePrice.push(8);
  }
////////////////////////////////////////
for (let index = 0; index <= toppings.length; index ++) {
  if (index.toString().includes("pepperoni")){
  toppingsPrice.push(0.5)
  console.log('test1')

} else if (index.toString().includes("sausage")) {
  toppingsPrice.push(0.55)
  console.log('test1')

} else if (index.toString().includes("bacon")) {
  toppingsPrice.push(0.65)
  console.log('test1')

} else if (index.toString().includes("steak")) {
  toppingsPrice.push(0.75)
  console.log('test1')

} else if (index.toString().includes("extraCheese")) {
  toppingsPrice.push(0.40)
  console.log('test1')

} else if (index.toString().includes("ham")) {
  toppingsPrice.push(0.60)
  console.log('test1')
}

};
console.log(toppingsPrice)
console.log(pizzaSizePrice)
}

// let pepperoni = 0.5;
// let sausage = 0.55;
// let bacon = 0.65;
// let steak = 0.75;
// let extraCheese = 0.4;
// let ham = 0.6;

// Take size parameter and convert into price for mediumSize, if small, convert to price
// take array, loop through each object inside array and convert price
