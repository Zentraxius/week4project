  /////////////////////////////
 /// User Interface Logic. ///
///////////////////////////// 
$(document).ready(function(){
  $('form#orderPizza').submit(function(event) {
    event.preventDefault();
  })
})
  ///////////////////////////
 ////  Business Logic.  ////
///////////////////////////

function Pizza(size, toppings, name) {
this.size = size;
this.toppings = toppings;
this.userName = name;
}