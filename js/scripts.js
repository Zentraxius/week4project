  /////////////////////////////
 /// User Interface Logic. ///
///////////////////////////// 
$(document).ready(function(){
  $('form#orderPizza').submit(function(event) {
    event.preventDefault();
    let clientName = $('.userName').val();
    console.log(clientName)
    let pizzaSize = $('input:radio[name=pizzaSize]:checked').val();
    console.log(pizzaSize);
    let toppings = [];
    $('input:checkbox[name=toppings]:checked').each(function() {
    const toppingsList = $(this).val();
    toppings.push(toppingsList)
    })
    console.log(toppings)
    let pizzaPie = new Pizza(pizzaSize, toppings)
    console.log(pizzaPie)

    $('.nameResult').text('Hello, ' + clientName + ', thank you for ordering!');
  })
})
  ///////////////////////////
 ////  Business Logic.  ////
///////////////////////////

function Pizza(size, toppings, name) {
this.size = size;
this.toppings = toppings;
}

///Brute Force Solution///

// Pizza.prototype.calculate = function(size, toppings)
// let smallSize = 5
// let mediumSize = 6.5
// let largeSize = 8
// //
// let pepperoni = 0.5
// let sausage = 0.55
// let bacon = 0.65
// let steak = 0.75
// let extraCheese = 0.4
// let ham = 0.60