/////////////////////////////
/// User Interface Logic. ///
/////////////////////////////
$(document).ready(function () {
  // Wait until Ready
  $("form#orderPizza").submit(function (event) {
    // Only activates on submit
    event.preventDefault(); // Stops black magic

    let clientName = $(".userName").val(); // Takes input and converts to a variable for us

    let pizzaSize = $("input:radio[name=pizzaSize]:checked").val(); // Takes the size selection and converts to a variable

    let toppings = []; // Creates empty Array for use below
    $("input:checkbox[name=toppings]:checked").each(function () {
      // *simple* array-checkbox
      const toppingsList = $(this).val(); // Just takes results of each checkbox
      toppings.push(toppingsList); // Pushes results into array
    }); // Somehow the simplest option I found to put each topping into the array.

    let pizzaPie = new Pizza(pizzaSize, toppings); // Takes created variables above and uses to make object using constructor Pizza

    let resultHold = pizzaPie.calculate();
    console.log(resultHold);
    // console.log(resultHold + " this is result");

    $(".nameResult").text("Hello, " + clientName + ", thank you for ordering!"); // Takes name, thanks name.
    $(".orderTotal").text(
      "$" + resultHold + " is your total, have a great day!"
    ); // Posts order total
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

Pizza.prototype.calculate = function () {
  // The magic
  let pizzaTotal = 0; // Hold this number
  ////////////////////////////////////////
  if (this.size === "smallSize") {
    // Bite sized noms
    pizzaTotal += 4.99; // If small adds 5
  } else if (this.size === "mediumSize") {
    pizzaTotal += 6.49; // If medium adds 6.5
  } else if (this.size === "largeSize") {
    pizzaTotal += 7.99; // If large adds 8
  }
  pizzaTotal += this.toppings.length * 0.5; // Replaced over 30 lines of code with this 1 line.  I'm kind of upset, I spent 4 hours on those 30 lines.
  ////////////////////////////////////////
  return pizzaTotal; // When prototype is finished being used, the returned value is the pizzaTotal variable
};
