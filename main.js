const submitBtn = document.getElementById('reg-btn');
const username = document.getElementById('username');
const usernameError = document.getElementById('username-error');
const email = document.getElementById('email');
const emailError = document.getElementById('email-error')
const password = document.getElementById('password');
const passwordError = document.getElementById('password-error');
const confirmPassword = document.getElementById('confirm-password');
const confirmPasswordError = document.getElementById('confirm-password-error');
const signupBtn = document.getElementById('sign-up-btn');
const loginBtn = document.getElementById('sign-in-btn');
const contain = document.getElementsByClassName('container');
const emailDiv = document.getElementById('email-div');
const confirmPasswordDiv = document.getElementById('confirm-password-div');
const myForm = document.getElementById('form');

function lightUp() {
	signupBtn.classList.add('form-btnactive')

}


loginBtn.addEventListener('click', function() {
	emailDiv.classList.add('signin')
	confirmPasswordDiv.classList.add('signin')
	loginBtn.classList.add('form-btnactive')
	signupBtn.classList.remove('form-btnactive')
	submitBtn.innerHTML = "Sign In";
	submitBtn.classList.remove('signup-class')
	submitBtn.classList.add('login-class')
	
});

signupBtn.addEventListener('click', function() {
	emailDiv.classList.remove('signin')
	confirmPasswordDiv.classList.remove('signin')
	signupBtn.classList.add('form-btnactive')
	loginBtn.classList.remove('form-btnactive')
	submitBtn.classList.remove('login-class')
	submitBtn.classList.add('signup-class')
	submitBtn.innerHTML = "Sign Up";
})


function errorHandle() {

	usernameError.textContent = '';
	passwordError.textContent = '';
	emailError.textContent = ''
	confirmPasswordError.textContent = '';

	if(username.value === '') {
		usernameError.textContent = "Please enter Username"
		return false;
	}

	else if( /(.+)@(.+){2,}\.(.+){2,}/.test(email.value) == false) {
		emailError.textContent = "Email is Invalid"	
		return false;
	} 
		 

	else if(password.value === '') {
		passwordError.textContent = "Please enter Password"
		return false;
	}

	else if(confirmPassword.value != password.value) {
		confirmPasswordError.textContent = "Your password does not match"
		return false;
	}
	return true;

}
