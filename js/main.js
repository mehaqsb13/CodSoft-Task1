function validateForm() {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".signup-form, .login-form");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
}

function togglePassword() {
  var passwordInput = document.getElementById("password");
  var toggleBtn = document.querySelector("#password-toggle-btn");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleBtn.src = "eye-slash-icon.png";
  } else {
    passwordInput.type = "password";
    toggleBtn.src = "eye-icon.png";
  }
}
