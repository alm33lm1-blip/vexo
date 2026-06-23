function registerUser(){

let name = document.getElementById("name").value;
let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

if(!name || !username || !password){
alert("Fill all fields");
return;
}

let users = JSON.parse(localStorage.getItem("vexo_users")) || [];

let exists = users.find(u => u.username === username);

if(exists){
alert("Username already exists");
return;
}

let user = {
id: Date.now(),
name,
username,
password,
followers: 0,
following: 0,
sparks: 0,
level: 1,
xp: 0,
verified: false,
createdAt: Date.now()
};

users.push(user);

localStorage.setItem("vexo_users", JSON.stringify(users));

alert("Account created 🔥");

window.location.href = "login.html";
}


// ================= LOGIN (SESSION) =================
function loginUser(){

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

let users = JSON.parse(localStorage.getItem("vexo_users")) || [];

let user = users.find(u =>
u.username === username &&
u.password === password
);

if(!user){
alert("Wrong username or password");
return;
}

// 🔥 SESSION SYSTEM
localStorage.setItem("vexo_session", "true");
localStorage.setItem("vexo_current", JSON.stringify(user));

alert("Welcome 🔥");

window.location.href = "home.html";
}


// ================= LOGOUT =================
function logoutUser(){

localStorage.removeItem("vexo_session");
localStorage.removeItem("vexo_current");

window.location.href = "login.html";
}