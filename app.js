// Cache the DOM
const counter_h1 = document.querySelector(".counter");
const increment_a = document.querySelector(".btn-inc");
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
  counter_h1.innerHTML++;
});

// Save the value of the counter to the tally
save_btn.addEventListener("click", () => {
  if (Number(counter_h1.innerText) < 1) {
    message_div.classList.add('show')
    message_p.innerText = "Increment First"
    setTimeout(() => {
      message_div.classList.remove('show')
    }, 2000)

  } else {
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
  }
});

// Reset Tally Display
refresh_a.addEventListener("click", () => {
  if (Number(totalTally_h2.innerHTML > 0)) {
    // Resets total tally
    totalTally_h2.innerHTML = 0;
    // Empty the savedCounts data storage array
    savedCounts.length = 0;
    
    // Cumulative count
    count_h4.innerText = 0
    // Number of tallies
    tally_h4.innerText = 0
    // Items in storage
    items_h4.innerText = 0
    
    // Show report only briefly then remove it
    message_div.classList.add('show')
    message_p.innerText = 'Storage Emptied'
    report_overlay_div.classList.add('show')
    setTimeout(() => {
      message_div.classList.remove('show')
      report_overlay_div.classList.remove('show')
    }, 4000)

  } else {
    message_div.classList.add('show')
    message_p.innerText = "No Data in Storage"
    setTimeout(() => {
      message_div.classList.remove('show')
    }, 2000)
  }
});

report_view_i.addEventListener('click', () => {
  // If there is no data to be reset tell user
  if (savedCounts.length < 1) {
    message_div.classList.add('show')
    message_p.innerText = "No Data in Storage"

    setTimeout(() => {
      message_div.classList.remove('show')
    }, 2000);

  } else {
  report_overlay_div.classList.add('show');
  // Cumulative count
  count_h4.innerText = savedCounts.slice(-1)[0]
  // Number of tallies
  tally_h4.innerText = savedCounts.length
  // Items in storage
  items_h4.innerText = savedCounts
  }
})

report_close_i.addEventListener('click', () => {
  report_overlay_div.classList.remove('show');
});