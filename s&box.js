// OPENING
    function input_deck(){
        let title = document.getElementById('title');
        let signupBtn = document.getElementById('signupBtn');
        let username = document.getElementById('sign_username');
        let password = document.getElementById('sign_password');
        let con_password = document.getElementById('confirm_password');
        let email = document.getElementById('sign_email');

        let user_ani = {
            'transform': 'translate(0, 0)',
            'opacity': '1'
        }
        let pass_ani = {
            'transform': 'translate(0, 0)',
            'opacity': '1'
        }
        let conPass_ani = {
            'transform': 'translate(0, 0)',
            'opacity': '1'
        }
        let email_ani = {
            'transform': 'translate(0, 0)',
            'opacity': '1'
        }

        title.style.opacity = "1"
        signupBtn.style.opacity = "1"
        Object.assign(username.style, user_ani);
        Object.assign(password.style, pass_ani);
        Object.assign(con_password.style, conPass_ani);
        Object.assign(email.style, email_ani);
    }

// SIGN UP CHANGES

function disable_sign(){
    let sign_contain = document.getElementById('signup_form_container');
    let title = document.getElementById('title');

    sign_contain.style.left = '0';
    sign_contain.style.opacity = '0';

    title.style.transitionDelay = '0s';
    title.style.opacity = '0';
}
function enable_sign(){
    let sign_contain = document.getElementById('signup_form_container');
    let title = document.getElementById('title');

    sign_contain.style.left = '50%';
    sign_contain.style.opacity = '1';

    title.style.transitionDelay = '0.8s';
    title.style.opacity = '1';

    document.getElementById('switch').innerHTML = "Login"
    document.getElementById('title').innerHTML = "Create an account"
}

// LOGIN CHANGES
function disable_log(){
    let log_contain = document.getElementById('login_form_container');
    let title = document.getElementById('title');

    log_contain.style.left = '100%';
    log_contain.style.opacity = '0';

    title.style.transitionDelay = '0s';
    title.style.opacity = '0';
}
function enable_log(){
    let log_contain = document.getElementById('login_form_container');
    let title = document.getElementById('title');

    log_contain.style.left = '50%'
    log_contain.style.opacity = '1'

    title.style.transitionDelay = '0.8s'
    title.style.opacity = '1';

    document.getElementById('switch').innerHTML = "Sign Up"
    document.getElementById('title').innerHTML = "Login to your account"

}

// SWITCH INTERFACE
let trigger = 0
function switch_interface(){
    if(trigger == 0){
        disable_sign();
        setTimeout(enable_log, 600)
        trigger = 1
    }else if(trigger == 1){
        disable_log();
        setTimeout(enable_sign, 600)
        trigger = 0
    }
}