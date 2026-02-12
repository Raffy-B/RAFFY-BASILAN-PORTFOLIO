document.getElementById("contactBtn").addEventListener("click", () => {
  alert("Thank you for connecting. I look forward to speaking with you.");
});

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(section => {
    if (section.getBoundingClientRect().top < window.innerHeight - 120) {
      section.classList.add("active");
    }
  });
});
