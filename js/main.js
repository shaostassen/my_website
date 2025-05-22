// Highlight the active navigation link based on the current page
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");
    const currentPage = window.location.pathname.split("/").pop();
  
    navLinks.forEach(link => {
      const linkPage = link.getAttribute("href");
      if (linkPage === currentPage || (linkPage === "index.html" && currentPage === "")) {
        link.classList.add("active");
      }
    });
  });
  
  // Optional: scroll to top on load
  window.addEventListener("load", () => {
    window.scrollTo(0, 0);
  });
  