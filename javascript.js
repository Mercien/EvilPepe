// JS FOR DESKTOP LINKS
// Get all the anchor tags inside the parent div
const anchorTags = document.querySelectorAll(".desktop-links a");

// Add click event listener to each anchor tag
anchorTags.forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    // Prevent the default behavior of the anchor tag (i.e., navigating to the href)
    event.preventDefault();

    // Remove the "active" class from all anchor tags
    anchorTags.forEach((a) => {
      a.classList.remove("active");
    });

    // Add the "active" class to the clicked anchor tag
    anchor.classList.add("active");

    // Get the target section ID from the href attribute
    const targetSectionId = anchor.getAttribute("href");

    // Get the target section element
    const targetSection = document.querySelector(targetSectionId);

    // Scroll to the target section with smooth behavior
    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// JS FOR MOBILE MENU
// Get all elements with the class name 'toggleSubMenu'
const toggleButtons = document.querySelectorAll("#toggleSubMenu");
// Get the sub-menu element
const subMenu = document.querySelector(".sub-menu");
const menuOverlay = document.querySelector(".menu-overlay");
const openMenuButton = document.querySelector(".openMenuButton");
const closeMenuButton = document.querySelector(".closeMenuButton");

// Add event listener to each toggle button
toggleButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Toggle the 'active' class on the sub-menu
    subMenu.classList.toggle("open");
    menuOverlay.classList.toggle("active");
    openMenuButton.classList.toggle("active");
    closeMenuButton.classList.toggle("active");
  });
});

// JS FOR FAQ
// Get all accordion buttons on the page
const accordionButtons = document.querySelectorAll(".accordion");

// Add click event listener to each accordion button
accordionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Toggle the active class on the clicked accordion button
    button.classList.toggle("active");

    // Find the corresponding panel for this accordion button
    const panel = button.nextElementSibling;

    // Toggle the active class on the panel to show/hide the content
    panel.classList.toggle("active");

    // Get the panel's current height
    const panelHeight = panel.scrollHeight + "px";

    // If the panel is active (visible), set the max-height to its current height to show the content
    if (panel.classList.contains("active")) {
      panel.style.maxHeight = panelHeight;
    } else {
      // If the panel is not active (hidden), set max-height to 0 to hide the content
      panel.style.maxHeight = "0";
    }
  });
});


// // Get the container element by its ID
// const firstModal = document.getElementById('first-modal');

// // Get the button element by its ID
// const button = document.getElementById('dont-wallet');

// // Add a click event listener to the button
// button.addEventListener('click', function() {
//     // Add or remove the 'active' class on the firstModal when the button is clicked
//     firstModal.classList.toggle('active');
// });