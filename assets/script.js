// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Benjamin Franco" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0     // Ginger bread
let cc = 0     // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

let total = 0 // Total Results 

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Define GingerBread
let qtyGbTd = document.querySelector("#qty-gb")
let qtyGb = localStorage.getItem('qty-gb')
if (qtyGb) {
    qtyGbTd.textContent = qtyGb;
}

// Define Sugar
let qtySugarTd = document.querySelector("#qty-sugar")
let qtySugar = localStorage.getItem('qty-gb')
if (qtySugar) {
    qtySugarTd.textContent = qtySugar;
}

// Define Chocolate Chip
// Re-Name "cc" to "chocolate" in HTML 
let qtyChocolateTd = document.querySelector("#qty-chocolate")
let qtyChocolate = localStorage.getItem('qty-chocolate')
if (qtyChocolate) {
    qtyChocolateTd.textContent = qtyChocolate;
}

// Define Total
let qtyTotalTd = document.querySelector("#qty-total")
let qtyTotal = localStorage.getItem('qty-total')
if (qtyTotal) {
    qtyTotalTd.textContent = qtyTotal;
}

let menu = document.querySelectorAll('.menu')
let summary = document.querySelectorAll('.summary')

// Event listener for clicks on the "+" / "-" button for Ginger Bread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    let qtyGb = parseInt(qtyGbTd.textContent);
    qtyGb = qtyGb + 1;
    qtyGbTd.textContent = qtyGb;
    localStorage.setItem('qty-gb', qtyGb);

})

document.getElementById('minus-gb').addEventListener('click', function() {
    let qtyGb = parseInt(qtyGbTd.textContent);
    qtyGb = qtyGb - 1;
    qtyGbTd.textContent = qtyGb;
    localStorage.setItem('qty-gb', qtyGb);
}) 

// Event listener for clicks on the "+" / "-" button for Sugar cookies
document.getElementById('add-sugar').addEventListener('click', function(){
    let qtySugar = parseInt(qtySugarTd.textContent);
    qtySugar = qtySugar + 1;
    qtySugarTd.textContent = qtySugar;
    localStorage.setItem('qty-sugar', qtySugar);
})

document.getElementById('minus-sugar').addEventListener('click', function(){
    let qtySugar = parseInt(qtySugarTd.textContent);
    qtySugar = qtySugar - 1;
    qtySugarTd.textContent = qtySugar;
    localStorage.setItem('qty-sugar', qtySugar);
})

// Event listener for clicks on the "+" / "-" button for Chocolate Chip cookies
document.getElementById('add-chocolate').addEventListener('click', function(){
    let qtyChocolate = parseInt(qtyChocolateTd.textContent);
    qtyChocolate = qtyChocolate + 1;
    qtyChocolateTd.textContent = qtyChocolate;
    localStorage.setItem('qty-chocolate', qtyChocolate);
})

document.getElementById('minus-chocolate').addEventListener('click', function(){
    let qtyChocolate = parseInt(qtyChocolateTd.textContent);
    qtyChocolate = qtyChocolate - 1;
    qtyChocolateTd.textContent = qtyChocolate;
    localStorage.setItem('qty-chocolate', qtyChocolate);
})

// Total

document.getElementById('add-gb').addEventListener('click', function(){
    let qtyTotal = parseInt(qtyTotalTd.textContent);
    qtyTotal = qtyTotal + 1;
    qtyTotalTd.textContent = qtyTotal;
    localStorage.setItem('qty-total', qtyTotal);
})

document.getElementById('add-sugar').addEventListener('click', function(){
    let qtyTotal = parseInt(qtyTotalTd.textContent);
    qtyTotal = qtyTotal + 1;
    qtyTotalTd.textContent = qtyTotal;
    localStorage.setItem('qty-total', qtyTotal);
})

document.getElementById('add-chocolate').addEventListener('click', function(){
    let qtyTotal = parseInt(qtyTotalTd.textContent);
    qtyTotal = qtyTotal + 1;
    qtyTotalTd.textContent = qtyTotal;
    localStorage.setItem('qty-total', qtyTotal);
})

document.getElementById('minus-gb').addEventListener('click', function(){
    let qtyTotal = parseInt(qtyTotalTd.textContent);
    qtyTotal = qtyTotal - 1;
    qtyTotalTd.textContent = qtyTotal;
    localStorage.setItem('qty-total', qtyTotal);
})

document.getElementById('minus-sugar').addEventListener('click', function(){
    let qtyTotal = parseInt(qtyTotalTd.textContent);
    qtyTotal = qtyTotal - 1;
    qtyTotalTd.textContent = qtyTotal;
    localStorage.setItem('qty-total', qtyTotal);
})

document.getElementById('minus-chocolate').addEventListener('click', function(){
    let qtyTotal = parseInt(qtyTotalTd.textContent);
    qtyTotal = qtyTotal - 1;
    qtyTotalTd.textContent = qtyTotal;
    localStorage.setItem('qty-total', qtyTotal);
})

   


