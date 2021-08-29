// Cache the DOM
const counter_h1 = document.querySelector(".counter");
const increment_a = document.querySelector(".btn-inc");
const save_btn = document.querySelector(".btn-save");
const totalTally_h2 = document.querySelector(".totalTally");
const refresh_a = document.querySelector(".btn-refresh");
const message_p = document.querySelector(".message p");
const report_close_i = document.querySelector(".btn-close");
const report_view_i = document.querySelector(".btn-report");
var savedCounts = new Array();


// Increment the counter on click
increment_a.addEventListener("click", () => {
  counter_h1.innerHTML++;
});

// Save the value of the counter to the tally
save_btn.addEventListener("click", () => {
  // Cast strings as Integers for calculation
  var count = Number(counter_h1.innerHTML);
  var tally = Number(totalTally_h2.innerHTML);
  // Increment 'tally' with 'count'
  tally += count;
  // Pushes tally to storage
  savedCounts.push(tally);
  // Reset counter
  counter_h1.innerHTML = 0;
  // Display Current Total Tally
  totalTally_h2.innerHTML = tally;
  // Retrieves last item entered in list
  console.log("Current cululative count: " + savedCounts.slice(-1)[0]);
  // Shows number of additions to list so far
  console.log("Number of elements in storage: " + savedCounts.length);
  console.log("Items in storage: " + savedCounts)
});

// Reset Tally Display
refresh_a.addEventListener("click", () => {
  if (Number(totalTally_h2.innerHTML > 0)) {
    // Resets total tally
    totalTally_h2.innerHTML = 0;
    // Empty the savedCounts data storage array
    savedCounts.length = 0;
  } else {
    console.log("No data");
  }
});

report_close_i.addEventListener('click', () => {
  report-overlay.classList.add('hide');
});