// On age.html load
window.onload = function () {
  const userName = localStorage.getItem("userName");
  const savedDob = localStorage.getItem("dob");

  if (userName) {
    document.getElementById("greetName").textContent = userName;
  }

  if (savedDob) {
    document.getElementById("dob").value = savedDob;
    calculateAge(); // Auto-calculate if DOB is saved
  }
};

function calculateAge() {
  const dobInput = document.getElementById("dob").value;
  const output = document.getElementById("output");

  if (!dobInput) {
    output.innerHTML = "<p style='color:red;'>Please select your date of birth.</p>";
    return;
  }

  localStorage.setItem("dob", dobInput);

  const dob = new Date(dobInput);
  const now = new Date();

  if (dob > now) {
    output.innerHTML = "<p style='color:red;'>Birth date cannot be in the future!</p>";
    return;
  }

  const diff = now - dob;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const years = Math.floor(days / 365.25);
  const months = Math.floor((days % 365.25) / 30);

  output.innerHTML = `
    <p><strong>Years:</strong> ${years}</p>
    <p><strong>Months:</strong> ${months}</p>
    <p><strong>Days:</strong> ${days}</p>
    <p><strong>Hours:</strong> ${hours}</p>
    <p><strong>Minutes:</strong> ${minutes}</p>
    <p><strong>Seconds:</strong> ${seconds}</p>
  `;
}

function goBack() {
  window.location.href = "index.html";
}

function toggleMusic() {
  const music = document.getElementById("bgMusic");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}
