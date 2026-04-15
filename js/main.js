const container = document.getElementById("musicContainer");

if (container && typeof tracks !== "undefined") {
  tracks.forEach((track, i) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${track.title}</h3>
      <button onclick="loadTrack(${i})">▶ Play</button>
      <a href="${track.file}" download>
        <button>⬇ Download</button>
      </a>
    `;

    container.appendChild(card);
  });
}

function openLogin() {
  document.getElementById("loginModal").style.display = "block";
}

function closeLogin() {
  document.getElementById("loginModal").style.display = "none";
}

function openSignup() {
  document.getElementById("signupModal").style.display = "block";
}

function closeSignup() {
  document.getElementById("signupModal").style.display = "none";
}

window.onclick = function(event) {
  let login = document.getElementById("loginModal");
  let signup = document.getElementById("signupModal");

  if (event.target == login) login.style.display = "none";
  if (event.target == signup) signup.style.display = "none";
}

function toggleFavorite(index) {
  let favs = JSON.parse(localStorage.getItem("favorites")) || [];

  if (favs.includes(index)) {
    favs = favs.filter(i => i !== index);
  } else {
    favs.push(index);
  }

  localStorage.setItem("favorites", JSON.stringify(favs));
  alert("Updated favorites ❤️");
}

card.innerHTML = `
  <h3>${track.title}</h3>
  <button class="play-btn" data-index="${i}">▶ Play</button>
  <button onclick="toggleFavorite(${i})">❤️</button>
  <a href="${track.file}" download>
    <button>⬇ Download</button>
  </a>
`;

function login(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      alert("Login successful! Welcome " + user.email);

      // redirect to home page
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert(error.message);
    });
}