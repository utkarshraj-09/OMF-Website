// popup form
// Show Popup on Page Load
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-collapse .nav-link");
  const navCollapse = document.querySelector(".navbar-collapse");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      const bsCollapse = new bootstrap.Collapse(navCollapse, {
        toggle: true
      });
      bsCollapse.hide();
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("popupOverlay").classList.add("active");
    }, 1000); // Show after 1 second
});

// Close Popup Function
function closePopup() {
    document.getElementById("popupOverlay").classList.remove("active");
}

// Form Validation
document.getElementById("popupForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent actual form submission

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || phone === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!validatePhone(phone)) {
        alert("Please enter a valid phone number.");
        return;
    }

    alert("Form submitted successfully!");
    closePopup();
});

// Email Validation Function
function validateEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Phone Validation Function
function validatePhone(phone) {
    let regex = /^[0-9]{10}$/; // Assumes a 10-digit phone number
    return regex.test(phone);
}



// counter

var num1 = setInterval(projectDone, 10)
var count1 = 3100;

function projectDone(){
    count1++;
    document.querySelector("#number1").innerHTML= count1;
    // stop condition
    if(count1 == 3500){
        clearInterval(num1);
    }
};

var num2 = setInterval(projectDone2, 10)
var count2 = 1500;

function projectDone2(){
    count2++;
    document.querySelector("#number2").innerHTML= count2;
    // stop condition
    if(count2 == 1850){
        clearInterval(num2);
    }
};

var num3 = setInterval(projectDone3, 10)
var count3 = 1800;

function projectDone3(){
    count3++;
    document.querySelector("#number3").innerHTML= count3;
    // stop condition
    if(count3 == 2100){
        clearInterval(num3);
    }
};


var num4 = setInterval(projectDone4, 10)
var count4 = 12;

function projectDone4(){
    count4++;
    document.querySelector("#number4").innerHTML= count4;
    // stop condition
    if(count4 == 350){
        clearInterval(num4);
    }
};

document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll(".navbar-collapse .nav-link");
    var navCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (navCollapse.classList.contains("show")) {
                new bootstrap.Collapse(navCollapse).toggle();
            }
        });
    });
});



