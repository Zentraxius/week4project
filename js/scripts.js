  /////////////////////////////
 /// User Interface Logic. ///
/////////////////////////////
$(document).ready(function () { // Wait until Ready
  $("form#orderPizza").submit(function (event) { // Only activates on submit
    event.preventDefault(); // Stops black magic

    let clientName = $(".userName").val(); // Takes input and converts to a variable for use
    console.log(clientName); // Debug 

    let pizzaSize = $("input:radio[name=pizzaSize]:checked").val(); // Takes the size selection and converts to a variable
    console.log(pizzaSize); // Debug

    let toppings = []; // Creates empty Array for use below
    $("input:checkbox[name=toppings]:checked").each(function () { // *simple* array/checkbox
      const toppingsList = $(this).val(); // Just takes results of each checkbox 
      toppings.push(toppingsList); // Pushes results into array
    });// Somehow the simplest option I found to put each topping into the array.
    console.log(toppings); // Debug

    let pizzaPie = new Pizza(pizzaSize, toppings); // Takes created variables above and uses to make object using constructor Pizza
    console.log(pizzaPie); // Debug

$('.orderTotal').text(pizzaPie.calculate) // Calls calculate prototype
    $(".nameResult").text("Hello, " + clientName + ", thank you for ordering!"); // Takes name, thanks name.
  });
});

  ///////////////////////////
 ////  Business Logic.  ////
///////////////////////////

function Pizza(size, toppings) { // Confusion begins
  this.size = size; // Takes size parameter and assigns as size
  this.toppings = toppings; // Takes toppings parameter and calls it toppings
}

///Brute Force Solution/// (note-failing)

Pizza.prototype.calculate = function (size, toppings) {
  let holding = size
  let smallSize = 5;
  let mediumSize = 6.5;
  let largeSize = 8;
  console.log(holding)
  //
  let pepperoni = 0.5;
  let sausage = 0.55;
  let bacon = 0.65;
  let steak = 0.75;
  let extraCheese = 0.4;
  let ham = 0.6;
  
};
// Take size parameter and convert into price for mediumSize, if small, convert to price
// take array, loop through each object inside array and convert price 
