// Cache the DOM
const counter_h1 = document.querySelector(".counter");
const increment_a = document.querySelector(".btn-inc");
const decrement_a = document.querySelector(".btn-dec");
const save_btn = document.querySelector(".btn-save");
const totalTally_h2 = document.querySelector(".totalTally");
const refresh_a = document.querySelector(".btn-refresh");
const message_p = document.querySelector(".message p");
const message_div = document.querySelector(".message");
const report_close_i = document.querySelector(".btn-report-close");
const report_view_i = document.querySelector(".btn-report-view");
const report_overlay_div = document.querySelector(".report-overlay");

const count_h4 = document.querySelector(".count");
const tally_h4 = document.querySelector(".tally");
const items_h4 = document.querySelector(".items");

var savedCounts = new Array();


// Increment the counter on click
increment_a.addEventListener("click", () => {
  counter_h1.textContent++;
});

// Decrement the counter on click
decrement_a.addEventListener("click", () => {
  if (Number(counter_h1.textContent) < 1) {
    message_div.classList.add('show')
    message_p.textContent = "Can't be Negative"
    setTimeout(() => {
      message_div.classList.remove('show')
    }, 2000)
  } else {
    counter_h1.textContent--;
  }
});

// Save the value of the counter to the tally
save_btn.addEventListener("click", () => {
  if (Number(counter_h1.textContent) < 1) {
    message_div.classList.add('show')
    message_p.textContent = "Increment First"
    setTimeout(() => {
      message_div.classList.remove('show')
    }, 2000)

  } else {
    report_overlay_div.classList.remove('show')
  // Cast strings as Integers for calculation
  var count = Number(counter_h1.textContent);
  var tally = Number(totalTally_h2.textContent);
  // Increment 'tally' with 'count'
  tally += count;
  // Pushes tally to storage
  savedCounts.push(tally);
  // Reset counter
  counter_h1.textContent = 0;
  // Display Current Total Tally
  totalTally_h2.textContent = tally;
  }
});

// Reset Tally Display
refresh_a.addEventListener("click", () => {
  if (Number(totalTally_h2.textContent > 0)) {
    // Resets total tally
    totalTally_h2.textContent = 0;
    // Empty the savedCounts data storage array
    savedCounts.length = 0;
    
    // Cumulative count
    count_h4.textContent = 0
    // Number of tallies
    tally_h4.textContent = 0
    // Items in storage
    items_h4.textContent = 0
    
    // Show report only briefly then remove it
    message_div.classList.add('show')
    message_p.textContent = 'Storage Emptied'
    report_overlay_div.classList.add('show')
    setTimeout(() => {
      message_div.classList.remove('show')
      report_overlay_div.classList.remove('show')
    }, 4000)

  } else {
    message_div.classList.add('show')
    message_p.textContent = "No Data in Storage"
    setTimeout(() => {
      message_div.classList.remove('show')
    }, 2000)
  }
});

report_view_i.addEventListener('click', () => {
  // If there is no data to be reset tell user
  if (savedCounts.length < 1) {
    message_div.classList.add('show')
    message_p.textContent = "No Data in Storage"

    setTimeout(() => {
      message_div.classList.remove('show')
    }, 2000);

  } else {
  report_overlay_div.classList.add('show');
  // Cumulative count
  count_h4.textContent = savedCounts.slice(-1)[0]
  // Number of tallies
  tally_h4.textContent = savedCounts.length
  // Items in storage
  items_h4.textContent = savedCounts.slice(-3)
  }
})
// Remove report overlay on close_button click
report_close_i.addEventListener('click', () => {
  report_overlay_div.classList.remove('show');
});