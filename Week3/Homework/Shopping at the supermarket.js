'use strict';


const shoppings = ['milk', 'banana' ]

function addToShoppingCart(item) {
    if (shoppings.length <= 2){
        shoppings.push(item)
        console.log(`You bought ${shoppings}!`);
    } else if (shoppings.length <= 3){
        shoppings.shift();
        shoppings.push(item)
        console.log(`You bought ${shoppings}!`)
    } 
   
}

addToShoppingCart('Cake');
addToShoppingCart('Chocolate');
addToShoppingCart('Apples');
addToShoppingCart('Wine');




