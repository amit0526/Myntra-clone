// ================= SEARCH HOVER =================

const searchInput = document.querySelector(".search_input");
const searchBar = document.querySelector(".search_bar");

searchInput.addEventListener("focus", () => {
  searchBar.style.boxShadow = "0 0 8px rgba(255,63,108,0.5)";
  searchBar.style.backgroundColor = "#ffffff";
});

searchInput.addEventListener("blur", () => {
  searchBar.style.boxShadow = "none";
  searchBar.style.backgroundColor = "#f5f5f6";
});

// ================= PROFILE DROPDOWN =================

const profile = document.getElementById("profile");
const profileDropdown = document.getElementById("profileDropdown");

profile.addEventListener("mouseenter", () => {
  profileDropdown.style.display = "block";
});

profile.addEventListener("mouseleave", () => {
  profileDropdown.style.display = "none";
});

// ================= WISHLIST DROPDOWN =================

const wishlist = document.getElementById("wishlist");
const wishlistDropdown = document.getElementById("wishlistDropdown");

wishlist.addEventListener("mouseenter", () => {
  wishlistDropdown.style.display = "block";
});

wishlist.addEventListener("mouseleave", () => {
  wishlistDropdown.style.display = "none";
});

// ================= BAG CLICK =================

const bag = document.querySelector(".action_container:last-child");

bag.addEventListener("click", () => {
  alert("Your bag is empty 🛍️");
});


// Footer links demo interaction
const footerLinks = document.querySelectorAll("footer a");

footerLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    alert("This page is under development 🚀");
  });
});