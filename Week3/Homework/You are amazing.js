'use strict';


function giveCompliment(name) {
    const compliments = ['Great!', 'Awesome!', 'Looking good!', 'The DUDE', 'rocking it! ', 'the Coolest of em all!', 'solid as a rock', 'Doing well!', 'Excelent!', 'Tiny Rick!' ];
    return `You are ${compliments[Math.floor(Math.random() * 10)]} ${name}!` 
}

console.log(giveCompliment('Ammar'));
console.log(giveCompliment('Ammar'));
console.log(giveCompliment('Ammar'));
console.log(giveCompliment('Ammar'));