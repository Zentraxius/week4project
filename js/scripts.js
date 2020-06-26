/////////////////////////////
/// User Interface Logic. ///
/////////////////////////////
$(document).ready(function () {
  $("form#orderPizza").submit(function (event) {
    event.preventDefault(); 
    let clientName = $(".userName").val(); 
    let pizzaSize = $("input:radio[name=pizzaSize]:checked").val(); 
    let toppings = []; 

    $("input:checkbox[name=toppings]:checked").each(function () {
      const toppingsList = $(this).val(); 
      toppings.push(toppingsList); 
    }); 

    let pizzaPie = new Pizza(pizzaSize, toppings);
    let resultHold = pizzaPie.calculate();

    $(".nameResult").text("Hello, " + clientName + ", thank you for ordering!");
    $(".orderTotal").text(
      "$" + resultHold + " is your total, have a great day!"
    );
  });
});

///////////////////////////
////  Business Logic.  ////
///////////////////////////

function Pizza(size, toppings) {

  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.calculate = function () {
  let pizzaTotal = 0;
  if (this.size === "smallSize") {
    pizzaTotal += 4.99; 
  } else if (this.size === "mediumSize") {
    pizzaTotal += 6.49;
  } else if (this.size === "largeSize") {
    pizzaTotal += 7.99;
  }
  pizzaTotal += this.toppings.length * 0.5;
  return pizzaTotal;
};
