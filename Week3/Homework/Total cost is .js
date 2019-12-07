'use strict';


let cartForParty = {
    beer: 25 ,
    chips: 0.99,
    coke : 2.99,
    cake: 3.22,
    nuts: 7.99,
}

function calculateTotalPrice(obj){
    let objToArr = Object.values(obj);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let sum = objToArr.reduce(reducer);

    return console.log(sum);
}

calculateTotalPrice(cartForParty);