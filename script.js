// Get all modal buttons
var modalButtons = document.querySelectorAll('.open-modal');

// Get all modals
var modals = document.querySelectorAll('.modal');

// Get all close buttons
var closeButtons = document.querySelectorAll('.close');

console.log(modalButtons.length)
console.log(modals.length)
// Function to open the modal
modalButtons.forEach(button => {
  button.addEventListener('click', function() {
    var modalId = this.getAttribute('data-modal');
    var modal = document.getElementById(modalId);
    modal.style.display = 'block';
  });
});

// Function to close the modal
closeButtons.forEach(button => {
  button.addEventListener('click', function() {
    var modal = this.parentElement.parentElement;
    modal.style.display = 'none';
  });
});

// Close the modal if clicked outside of the modal content
window.onclick = function(event) {
  modals.forEach(modal => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
};
