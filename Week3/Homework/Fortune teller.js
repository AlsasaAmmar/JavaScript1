'use strict';


const jobs = ['Teacher', 'Web developer', 'Singer', 'drug dealer', 'Cashier']
const locations = ['London', 'Amsterdam', 'Mogadishu', 'Dhaka', 'Bogota']
const partnerNames = ['Fatsonina', 'Jane Austun', 'Scarlett Johansson', 'Beyoncé', 'Susan Boyle']
const numChildren = [3 , 15, 1, 0 , 4]

function tellFortune(job, locations, partnerNames, numChildren) { 
    return `You will be a ${job[Math.floor(Math.random() * jobs.length)]} in ${locations[Math.floor(Math.random() * locations.length)]}, and married to ${partnerNames[Math.floor(Math.random() * partnerNames.length)]} with ${numChildren[Math.floor(Math.random() * numChildren.length)]} kids.`
}

console.log(tellFortune(jobs, locations, partnerNames, numChildren))
