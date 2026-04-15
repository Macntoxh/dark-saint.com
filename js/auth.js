function signup(name, email, password) {
  const user = { name, email, password };
  localStorage.setItem("user", JSON.stringify(user));
  alert("Account created!");
}

function login(email, password) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.email === email && user.password === password) {
    alert("Login successful!");
  } else {
    alert("Invalid credentials");
  }
}

// PASTE YOUR FIREBASE CONFIG HERE
const firebaseConfig = {
  apiKey: "PASTE_HERE",
  authDomain: "PASTE_HERE",
  projectId: "PASTE_HERE",
  appId: "PASTE_HERE"
};

// INIT FIREBASE
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// SIGN UP
function signup(email, password) {
  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("Account created!");
    })
    .catch(error => {
      alert(error.message);
    });
}

// LOGIN
function login(email, password) {
  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Login successful!");
    })
    .catch(error => {
      alert(error.message);
    });
}

function loginUser(event) {
  event.preventDefault(); // stops page reload

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  login(email, password);
}

function login(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Login successful!");
      window.location.href = "index.html"; // redirect
    })
    .catch(error => {
      alert(error.message);
    });
}