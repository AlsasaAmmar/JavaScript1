'use strict';

// I made it in two different ways. Once I used different functions and one I used only one big function
let num = 9999777788880000 ; //vaild
let num1 = 6666666666661666 ; //valid
let num2 = 4444444444444444 ;// not valid
let num3 = 1111111111111110 ;//not valid
let num4 = 6666666666666661 ; //not valid


checkCreditCard(num);
checkCreditCard(num1);
checkCreditCard(num2);
checkCreditCard(num3);
checkCreditCard(num4)

function checkCreditCard(creditNum){
// Number must be 16 digits, all of them must be numbers

   
    //  changes the number to a string so it has length property
    let creditNumString = creditNum.toString(); 
    
    //changes the number to an array that has one string of the number
    let creditNumArr = creditNumString.split(',');
    let lengthIsValid = creditNumString.length === 16;
    // checks if the number has 16 digits
    // if (creditNumString.length< 16 || creditNumString.length > 16) {
    //     lengthIsValid = false; 
    //  } else { 
    //     lengthIsValid = true;
    //  }

// The final digit must be even
     let finalIsEven;
     if (creditNumString[15] % 2 === 0) {
        finalIsEven = true; 
    } else {
        finalIsEven = false; 
    }

// The sum of all the digits must be greater than 16
    let sumHigherThan16
    // to be able to sum the numbers, I had to create an arry that contains the numbers of the credit card number
    let creditNumArrOfStrings = [];
    for (var i = 0; i < creditNumString.length; i++) {
        creditNumArrOfStrings.push(parseFloat(creditNumString[i]));
    }
    // this calculates the numbers 
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const sum = creditNumArrOfStrings.reduce(reducer);

    if (sum <= 16) {
        sumHigherThan16 = false;
    } else {
        sumHigherThan16 = true;} 

        
// You must have at least two different digits represented (all of the digits cannot be the same)

    let notTheSameNum ;
    // changes the string in the array into a number in an array
    
    const allEqual = creditNumArrOfStrings => creditNumArrOfStrings.every( v => v === creditNumArrOfStrings[0] ); 
    if (allEqual(creditNumArrOfStrings)) {
        notTheSameNum = false;
    } else {
        notTheSameNum = true; 
    }

if (lengthIsValid && notTheSameNum && finalIsEven && sumHigherThan16) {
    console.log('Valid credit card Number');
} else { console.log(`${creditNum} is not valid. Please enter another number`);
}
    
    }

//this function makes the number a string
function fromNumToString(creditNum) {
    return  creditNum.toString(); 
}
//This function takes a string and produces an array with one item
function fromStringToArr(StringCreditNum){
    return StringCreditNum.split(',');
}

//This function takes the number as a string and makes it an array of sperated numbers
function fromNumStringToArrOfStrings(StringCreditNum){
    let creditNumArrOfStrings =[];
    for (var i = 0; i < StringCreditNum.length; i++) {
        creditNumArrOfStrings.push(parseFloat(StringCreditNum[i]));
    }
    return creditNumArrOfStrings; 
}


// checks if the number has 16 digits
 function checksIfNumLongerThan16(creditNum){
    let creditNumString = fromNumToString(creditNum) ;
    if (creditNumString.length< 16 || creditNumString.length > 16) {
        return false; 
     } else { 
        return true;
     }
}

// The final digit must be even
function checksLastNumIsEven(creditNum){
    let creditNumString = fromNumToString(creditNum)
     if (creditNumString[15] % 2 === 0) {
        return true; 
    } else {
        return false; 
    }

}

// The sum of all the digits must be greater than 16
function checksSumHigherThan16(creditNum){
   let creditNumString =  fromNumToString(creditNum); 
   let creditNumArrOfStrings =  fromNumStringToArrOfStrings(creditNumString);
   
   const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const sum = creditNumArrOfStrings.reduce(reducer);

    if (sum <= 16) {
        return false;
    } else {
        return true;} 
   
}

//You must have at least two different digits represented (all of the digits cannot be the same)
function checksIfNumAreSame(creditNum){
    let creditNumString =  fromNumToString(creditNum); 
    let creditNumArrOfStrings =  fromNumStringToArrOfStrings(creditNumString);
   
    const allEqual = creditNumArrOfStrings => creditNumArrOfStrings.every( v => v === creditNumArrOfStrings[0] ); 
    if (allEqual(creditNumArrOfStrings)) {
        return false
    } else {
        return true; 
    }
}


function main(creditNum){
    switch (true) {
        case (checksIfNumAreSame(creditNum) &&
        checksSumHigherThan16(creditNum) &&
        checksLastNumIsEven(creditNum) &&
        checksIfNumLongerThan16(creditNum)) :
            console.log('Acceptable card');
            break;
        case !checksIfNumAreSame(creditNum):
            console.log(`Number should contain at least 2 different digits`);
            break; 
        case !checksSumHigherThan16(creditNum):
            console.log(`Number's sum should be higher than 16`);
            break;
        case !checksLastNumIsEven(creditNum):
            console.log(`Last number should be even, steven!`);
            break;
        case !checksIfNumLongerThan16(creditNum):
            console.log(`Number should be at leat 16 digits`);
            break; 
    }

}

main(num); 
main(num1); 
main(num2); 
main(num3); 
main(num4); 

