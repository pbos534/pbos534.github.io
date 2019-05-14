function login () {
  // APPEND FORM DATA
  var data = new FormData();
  data.append('req', 'in');
  data.append('email', document.getElementById("login-username").value);
  data.append('password', document.getElementById("login-password").value);

  // INIT AJAX
  var xhr = new XMLHttpRequest();
  xhr.open('POST', "2-ajax-login.php", true);

  // WHEN THE PROCESS IS COMPLETE
  xhr.onload = function () {
    console.log(this.response);
    if (xhr.status==404 || xhr.status==403) {
      alert("Error loading page!");
    } else {
      if (this.response=="OK") {
        window.location.href = "3-page.php";
      } else {
        alert("Invalid email/password");
      }
    }
  };

  // SEND
  xhr.send(data);
  return false;
}

function logout () {
  // APPEND FORM DATA
  var data = new FormData();
  data.append('req', 'out');

  // INIT AJAX
  var xhr = new XMLHttpRequest();
  xhr.open('POST', "2-ajax-login.php", true);

  // WHEN THE PROCESS IS COMPLETE
  xhr.onload = function () {
    console.log(this.response);
    if (xhr.status==404 || xhr.status==403) {
      alert("Error loading page!");
    } else {
      if (this.response=="OK") {
        window.location.href = "1a-login.php";
      } else {
        alert("Error signing out");
      }
    }
  };

  // SEND
  xhr.send(data);
}