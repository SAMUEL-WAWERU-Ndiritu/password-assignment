function checkPassword() {
    let password = document.getElementById("password").value;
    let error = document.getElementById("error");
    let isValid = true;
    for (let i = 0; i < password.length - 2; i++) {
      let sequence = password.substring(i, i + 2);
      if (password.indexOf(sequence, i + 1) !== -1 || password.charCodeAt(i) + 1 === password.charCodeAt(i + 1) && 
      password.charCodeAt(i) + 2 === password.charCodeAt(i + 2)) {
        isValid = false;
        break;
      }
    }
  
    if (!isValid) {
      error.innerHTML = "Error: Password contains a repeated sequence";
    } else {
      error.innerHTML = "";
    }
  }
