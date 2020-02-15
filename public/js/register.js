$(document).ready(function() {
  // get references to form and input
  const registration = $("form#signup");
  const firstNameInp = $("input#firstName");
  const lastNameInp = $("input#lastName");
  const emailInp = $("input#email");
  const birthdateInp = $("input#birthdate");
  const passwordInp = $("input#password");
  const bioInp = $("input#bio");

  registration.on("submit", event => {
    event.preventDefault();
    let userData = {
      firstName: firstNameInp.val().trim(),
      lastName: lastNameInp.val().trim(),
      email: emailInp.val().trim(),
      birthdate: birthdateInp.val().trim(),
      password: passwordInp.val().trim(),
      bio: bioInp.val().trim()
    };
    if (!userData.email || userData.password) {
      return;
    }
    //if email and password, run registerUser function
    else {
      registerUser(
        userData.firstName,
        userData.lastName,
        userData.email,
        userData.birthdate,
        userData.password,
        userData.bio
      );
      //clears values in divs
      firstNameInp.val("");
      lastNameInp.val("");
      emailInp.val("");
      birthdateInp.val("");
      passwordInp.val("");
      bioInp.val("");
    }
  });

  function registerUser(firstName, lastName, email, birthdate, password, bio) {
    $.post("/api/register", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      birthdate: birthdate,
      password: password,
      bio: bio
    })
      .then(() => {
        console.log("new user added successfully");
        window.location.replace("/api/profile");
      })
      .catch(errorHandler);
  }

  function errorHandler(error) {
    $("#alert .msg").text(error.responseJSON);
    $("#alert").fadeIn(500);
  }
});
