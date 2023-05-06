const Login = document.querySelector('#LoginID')
const SignUp = document.querySelector('#SignUpID')
const LoginSignUpDetails = document.querySelector('.LoginSignUpDetails')
const SignUpDetails = document.querySelector('.SignUpDetails')


const LoginSubmit = document.getElementById('LoginSubmit')
const InputUsername = document.getElementById('InputUsername')
const InputPassWord = document.getElementById('InputPassWord')

const ShowPassword = document.getElementById('ShowPassword')
const HidePassword = document.getElementById('HidePassword')



Login.onclick = ()=> {
    LoginSignUpDetails.style.display='flex'
    SignUpDetails.style.display='none'
    Login.style.color='red'
    SignUp.style.color='black'
}

SignUp.onclick = ()=> {
    SignUpDetails.style.display='flex'
    LoginSignUpDetails.style.display='none'
    SignUp.style.color='red'
    Login.style.color='black'
}

ShowPassword.onclick = ()=> {
    if (InputPassWord.type === 'password') {
        InputPassWord.type = 'text'

    } else {
        InputPassWord.type = 'password'
    }
    
    HidePassword.style.display = 'flex'
    ShowPassword.style.display = 'none'

}

HidePassword.onclick = ()=> {
    if (InputPassWord.type === 'text') {
        InputPassWord.type = 'password'

    } else {
        InputPassWord.type = 'text'
    }

    HidePassword.style.display = 'none'
    ShowPassword.style.display = 'flex'
}


LoginSubmit.onclick =() => {
    if (!InputUsername.value) {
        alert('Input Username')

    } else if (!InputPassWord.value) {
        alert('Input Password')

    } else {
        alert('welcome')
        window.location = 'Dashboard.html'
    }

    
}









