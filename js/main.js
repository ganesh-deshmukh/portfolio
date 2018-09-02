// Select DOM items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");

const navItems = document.querySelectorAll(".nav-item");

// Set overlay of menu initially
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu); // (event, function to execute after it);
// toggle means make it's complement. if button is on, then make it off by toggling.

function toggleMenu() {
  if (!showMenu) {
    // showMenu is off(false) then make it true or ON by toggling it.
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // set menu state
    showMenu = true;
  } else {
    // showMenu is true(ON), then turn it OFF by changing their classes.change X to =option
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // set menu state
    showMenu = false;
  }
}
