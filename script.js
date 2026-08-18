function goToDashboard() {
  window.location.href = "dashboard.html";
}

function confirmLogout(){
if(confirm("Are you sure you want to logout?"))
window.location.href = "index.html";
}
 
function succ() {
  let typedEmail = document.getElementsByName("username")[0].value;
  let typedPassword = document.getElementsByName("password")[0].value;

  let correctEmail = "admin@gmail.com";
  let correctPassword = "admin";

  if (typedEmail === correctEmail && typedPassword === correctPassword) {
    window.location.href = "dashboard.html";
  } else {
    alert("Wrong email or password!");
  }

}

document.getElementById("username").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    succ();
  }
});
document.getElementById("password").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    succ();
  }
});