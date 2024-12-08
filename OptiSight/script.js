document.addEventListener("DOMContentLoaded", () => {
    const signInBtn = document.querySelector(".sign-in");
    const registerBtn = document.querySelector(".register");
  
    signInBtn.addEventListener("click", () => {
      alert("Sign In clicked!");
    });
  
    registerBtn.addEventListener("click", () => {
      alert("Register clicked!");
    });
  });

  
function learnMoreAction() {
    alert("Learn more about our services!");
    // You can replace this alert with navigation or other actions
    // Example: window.location.href = "/services.html";
}



// Service List code:";

// Optional: Add interactivity if needed
document.querySelector('.view-all-btn').addEventListener('click', function (e) {
    e.preventDefault();
    alert('Redirecting to the full services page!');
  });
  


// Newsletter Form Submission
document.getElementById('newsletter-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for subscribing!');
  });
  