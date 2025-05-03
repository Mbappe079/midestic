let username;

document.getElementById("submitBtn").onclick = function () {
  username = document.getElementById("myText").value;

  document.getElementById("heading").textContent = "Welcome " + username;
};
