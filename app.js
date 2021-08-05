// Cache the DOM
const counter_h1 = document.querySelector(".counter");
const increment_btn = document.querySelector(".btn-inc");
const save_btn = document.querySelector(".btn-save");
const totalTally_h2 = document.querySelector(".totalTally");
var savedCounts = new Array();

// Increment the counter on click
increment_btn.addEventListener('click', () => {
    counter_h1.innerHTML++;
});

// Save the value of the counter to the tally
save_btn.addEventListener('click', () => {
    totalTally_h2.innerHTML = counter_h1.innerHTML;
    counter_h1.innerHTML = 0;
    // savedCounts.push(totalTally_h2.innerHTML);
});
