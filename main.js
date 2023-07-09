// Get the counter element
var counterElement = document.getElementById("counter");

// Set the initial value and target
var count = 10000;
var target = 135;

// Calculate the decrement step based on the desired duration
var duration = 2500; // 2.5 seconds
var decrement = (count - target) / ((duration / 1000) * 60); // Divide by 60 for 60 frames per second

// Function to update the counter
function updateCounter() {
  // Check if count reaches the target value
  if (count <= target) {
    clearInterval(counterInterval); // Stop the counter
    counterElement.textContent = target.toLocaleString(); // Display the final value
  } else {
    counterElement.textContent = Math.round(count).toLocaleString(); // Display the current value
    count -= decrement; // Decrement the count
  }
}

// Start the counter
var counterInterval = setInterval(updateCounter, 16.7); // Updates approximately 60 frames per second (1000 ms / 60)