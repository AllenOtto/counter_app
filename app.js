// Cache the DOM
const counter_h1 = document.querySelector(".counter");
const increment_a = document.querySelector(".btn-inc");
const save_btn = document.querySelector(".btn-save");
const totalTally_h2 = document.querySelector(".totalTally");
const reset_a = document.querySelector(".btn-reset");
var savedCounts = new Array();

// Increment the counter on click
increment_a.addEventListener('click', () => {
    counter_h1.innerHTML++;
});

// Save the value of the counter to the tally
save_btn.addEventListener('click', () => {
    // Cast strings as Integers for calculation
    var count = Number(counter_h1.innerHTML);
    var tally = Number(totalTally_h2.innerHTML);

    // Increment 'tally' with 'count' 
    tally += count;
    
    // Reset counter
    counter_h1.innerHTML = 0;

    // Display Current Total Tally
    totalTally_h2.innerHTML = tally;
});

// Reset Tally Display
reset_a.addEventListener('click', () => {
    if (Number(totalTally_h2.innerHTML > 0)) {
        var tally = Number(totalTally_h2.innerHTML);
        // Pushes tally to storage
        savedCounts.push(tally);
        // Resets total tally
        totalTally_h2.innerHTML = 0;
        // Retrieves last item entered in list
        console.log(savedCounts.slice(-1)[0]);
        // Shows number of additions to list so far
        console.log(savedCounts.length);
    }else{
        console.log("No vehicles observed");
        savedCounts.push(0);
        console.log(savedCounts.slice(-1)[0]);
    }
});
