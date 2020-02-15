$(document).ready(function () {
  //file does a GET request to determine user logged in
  //updates hbrs page
  $.get('/api/user_data').then((data) => {
    $('')
  })
})