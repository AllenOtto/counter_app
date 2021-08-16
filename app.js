// Cache the DOM
const counter_h1 = document.querySelector(".counter");
const increment_a = document.querySelector(".btn-inc");
const save_btn = document.querySelector(".btn-save");
const totalTally_h2 = document.querySelector(".totalTally");
const reset_a = document.querySelector(".btn-reset");
const message_p = document.querySelector(".message p");
var savedCounts = new Array();
var cumulativeTotal = 0;

// Increment the counter on click
increment_a.addEventListener("click", () => {
  counter_h1.innerHTML++;
});

// Save the value of the counter to the tally
save_btn.addEventListener("click", () => {
  // Cast strings as Integers for calculation and push 'count' into savedCounts array
  var count = Number(counter_h1.innerHTML);
  savedCounts.push(count);
  var tally = Number(totalTally_h2.innerHTML);
  // Get tally of all elements in array
  tally += count;
  // Reset counter
  counter_h1.innerHTML = 0;
  // Display Current Total Tally
  totalTally_h2.innerHTML = tally;
  if (savedCounts.length > 0) {
    cumulativeTotal += count;
    // Retrieves last item entered in list
    console.log("Total Cumulative Count: " + cumulativeTotal);
    // Shows number of additions to storage so far
    console.log("Save Events So Far: " + savedCounts.length);
    message_p.innerHTML = "^ " + count;
    console.log(message_p.classList);
  }
});

// Reset Tally Display
reset_a.addEventListener("click", () => {
  function resetData() {
    if (Number(totalTally_h2.innerHTML > 0)) {
      // Resets current total tally
      totalTally_h2.innerHTML = 0;
      message_p.classList.toggle("message_visible");
      message_p.innerHTML = "Data Reset";
    } else {
      message_p.innerHTML = "No Current Data";
    }
  }

  var timeId = setInterval(resetData(), 1000);
  clearInterval(timeId);
});
