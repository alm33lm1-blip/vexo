let user = null;

try {
user = JSON.parse(localStorage.getItem("vexo_current"));
} catch(e){
user = null;
}

if(!user){
window.location.href="login.html";
}