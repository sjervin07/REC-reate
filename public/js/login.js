$(document).ready(function() {
    const loginForm = $('form.logs');
    const emailInp = $('input#inputEmail');
    const passwordInp = $('input#inputPassword');

    // validating email and password entered
    loginForm.on('submit', (event) => {
        console.log('enter listener');
        event.preventDefault();
        let userData = {
            email: emailInp.val().trim(),
            password: passwordInp.val().trim()
        };

        if (!userData.email || !userData.password) {
            return
        } else {
            userLogin(userData.email, userData.password)
            emailInp.val('')
            passwordInp.val('')
        }
    });

    //userLogin posts to "/login" route
    //if successful redirects to profile page
    function userLogin(email, password) {
        console.log('entered user login function');
        $.post('/api/login', {
            email: email,
            password: password
        }).then(() => {
            console.log('password retrieved')
            window.location.replace('/profile')
        }).catch ((error) => {
            console.log(error)
            console.log('login failed')
        })
    }
});