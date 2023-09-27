$(document).ready(function () {
  const User = [];
  $("#email-error").hide();
  $("#password-error").hide();
  function validate() {
    let email = document.getElementById("emailid").value;
    let password = document.getElementById("passwordid").value;
    let emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    let passwordRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!.@$%^&*-]).{8,}$/;
    let emailResult = emailRegex.test(email);
    let passwordResult = passwordRegex.test(password);
    if (!emailResult) {
      $("#email-error").show();
      $("#password-error").hide();
      return;
    }
    if (!passwordResult) {
      $("#password-error").show();
      $("#email-error").hide();
      return;
    } else {
      const email = $("#emailid").val();
      const password = $("#passwordid").val();
      const item = {
        id: new Date().getTime(),
        email: email,
        password: password,
      };
      User.push(item);
      console.log(User);
      $("#formid")[0].reset();
      $("#email-error").hide();
      $("#password-error").hide();
    }
  }
  $("#submitbtn").click(function (e) {
    e.preventDefault();
    validate();
  });
});
