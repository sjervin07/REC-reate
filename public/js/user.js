$(document).ready(function () {
  //file does a GET request to determine user logged in
  //updates hbrs page
  $.get('/api/users_data').then((data) => {
    $('.memberFirstName').text(data.firstName)
    $('.memberLastName').text(data.lastName)
    $('.memberEmail').text(data.email)
    $('.memberBirthdate').text(data.birthdate)
    $('.memberBio').text(data.bio)
  })
});