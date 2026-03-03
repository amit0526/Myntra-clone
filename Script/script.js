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


// ================= BAG CLICK =================

const bag = document.querySelector(".action_container:last-child");

if (bag) {
  bag.addEventListener("click", () => {
    alert("Your bag is empty 🛍️");
  });
}


// ================= FOOTER LINKS =================

const footerLinks = document.querySelectorAll("footer a");

footerLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    alert("This page is under development 🚀");
  });
});
