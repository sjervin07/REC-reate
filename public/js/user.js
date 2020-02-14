
// from reverseengineeringcode assignment
$(document).ready(function() {
    // Getting references to our form and inputs
    var loginForm = $("form.login");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");
  
    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", function(event) {
      event.preventDefault();
      var userData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim()
      };
  
      if (!userData.email || !userData.password) {
        return;
      }
  
      // If we have an email and password we run the loginUser function and clear the form
      loginUser(userData.email, userData.password);
      emailInput.val("");
      passwordInput.val("");
    });
  
    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(email, password) {
      $.post("/api/login", {
        email: email,
        password: password
      })
        .then(function() {
          window.location.replace("/members");
          // If there's an error, log the error
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  });

  // from restaurants app
  //wait to attach handlers until DOM is full
$(function() {
  $("#addburger").on("click", event => {
    //prevent default on submit event
    event.preventDefault();
    let burgerName = $("#newBurger")
    .val()
    .trim()
    let nuevoBurger = {
      burger_name: burgerName
    };
    $.ajax("/api/burgers", {
      type: "POST",
      data: nuevoBurger
    }).then(() => {
      console.log(`${nuevoBurger} created`);
      //reload page to retrieve updated list
      location.href = "/"
      //location.reload();
    });
  });

  //Devour Burger on click event changes devour column to true
  $(".devourburger").on("click", event => {
    //prevent default on devour click event
    event.preventDefault();
    const id = $(event.target).data("id");
    console.log($(event.target).data("id"))
    const devouredState = {
      //if devoured = 1 return true; else devoured = 0 return false
      devoured: 1
    };
    //put request for true
    $.ajax(`/api/burgers/${id}`, {
      type: "PUT",
      data: devouredState
    }).then(() => {
      //reload upon completion of put request
      console.log("Burger Devoured!");
      location.reload();
    });
  });

  //eightySixBurger on click event deletes burger from DB
  $(".eightySixBurger").on("click", event => {
    //prevent default on eightySix click event
    event.preventDefault();
    const id = $(event.target).data("id");
    console.log(id)

    //send eightySix request
    $.ajax(`/api/burgers/${id}`, {
      type: "DELETE",
    }).then(location.reload());
  });
});
  