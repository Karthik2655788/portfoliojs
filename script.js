let images = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    "https://images.unsplash.com/photo-1518770660439-4636190af475",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
];

let index = 0;

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("modeBtn").addEventListener("click", toggleMode);
    document.getElementById("togglePicBtn").addEventListener("click", togglePicture);
    document.getElementById("nextBtn").addEventListener("click", nextImage);
    document.getElementById("prevBtn").addEventListener("click", prevImage);
    document.getElementById("addTaskBtn").addEventListener("click", addTask);
    document.getElementById("contactForm").addEventListener("submit", validateForm);

});

function togglePicture() {
    let pic = document.getElementById("profilePic");

    if (pic.style.display === "none") {
        pic.style.display = "block";
    } else {
        pic.style.display = "none";
    }
}

function nextImage() {
    index = (index + 1) % images.length;
    document.getElementById("slider").src = images[index];
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    document.getElementById("slider").src = images[index];
}

function addTask() {
    let input = document.getElementById("taskInput");
    if (input.value === "") return;

    let li = document.createElement("li");
    li.textContent = input.value;

    li.addEventListener("click", function () {
        this.remove();
    });

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

function validateForm(event) {
    event.preventDefault();

    let valid = true;

    nameError.innerText = "";
    emailError.innerText = "";
    messageError.innerText = "";

    if (name.value === "") {
        nameError.innerText = "Name required";
        valid = false;
    }

    if (email.value === "") {
        emailError.innerText = "Email required";
        valid = false;
    }

    if (message.value === "") {
        messageError.innerText = "Message required";
        valid = false;
    }

    if (valid) {
        alert("Form submitted successfully!");
    }
}

function toggleMode() {
    document.body.classList.toggle("dark");
}
