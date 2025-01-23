let usernameInput = document.getElementById('usernameInput');
let passwordInput = document.getElementById('passwordInput');
let loginButton = document.getElementById('loginButton');
let logoutButton = document.getElementById('logoutButton');
let admin = document.getElementById('admin');
let user = document.getElementById('user');


admin.style.display = "none";
user.style.display = "none";
logoutButton.style.display = "none";


function onLogin() {
  localStorage.setItem("username", usernameInput.value);
  logoutButton.style.display = "block";
  
  
  if (usernameInput.value == "admin" && passwordInput.value == "admin123") {
    localStorage.setItem("role", "admin");
    usernameInput.style.display = "none";
    passwordInput.style.display = "none";
    loginButton.style.display = "none";
    user.style.display = "none";
    admin.style.display = "block";
  }
  else {
    localStorage.setItem("role", "user");
    usernameInput.style.display = "none";
    passwordInput.style.display = "none";
    loginButton.style.display = "none";
    admin.style.display = "none";
    user.style.display = "block";
  }
}

if (localStorage.getItem('username')){
    usernameInput.style.display = "none";
    passwordInput.style.display = "none";
    loginButton.style.display = "none";
    logoutButton.style.display = "block";
    if (localStorage.getItem('role') == "admin") {
      user.style.display = "none";
      admin.style.display = "block";
    } else {
      admin.style.display = "none";
      user.style.display = "block";
    }
  }
  
  function onLogout() {
    localStorage.clear();
    location.reload();
  }

console.log(localStorage);