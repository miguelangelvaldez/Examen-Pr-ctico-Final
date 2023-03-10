function handlerClickSignUp() {
  const signupButton = document.getElementById("signup-button");
  const userForms = document.getElementById("user_options-forms");

  /**
   * Add event listener to the "Sign Up" button
   */
  signupButton.addEventListener(
    "click",
    () => {
      userForms.classList.remove("bounceRight");
      userForms.classList.add("bounceLeft");
    },
    false
  );
}

function handlerClickLogin() {
  let loginButton = document.getElementById("login-button");
  let userForms = document.getElementById("user_options-forms");

  /**
   * Add event listener to the "Login" button
   */
  loginButton.addEventListener(
    "click",
    () => {
      userForms.classList.remove("bounceLeft");
      userForms.classList.add("bounceRight");
    },
    false
  );
}