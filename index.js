// Your code here

const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#ff69b4";

// Move the Dodger to the left
function moveDodgerLeft() {
    let left = parseInt(dodger.style.left, 10);  // Get the current left position
  
    // If it's already at 0, don't move it left anymore
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;  // Move left by 1px
    }
  }
  
  // Move the Dodger to the right
  function moveDodgerRight() {
    let left = parseInt(dodger.style.left, 10);  // Get the current left position
  
    // If it's less than 360, move it right
    if (left < 360) {

      dodger.style.left = `${left + 1}px`;  // Move right by 1pxnpm
    }
  }
  
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});