const buttonPassword = document.getElementById('passwordText')
const buttonBack = document.getElementById('back')
const form1 = document.getElementById('signIn')
const form2 = document.getElementById('signUp')
const sectionError = document.getElementById('sectionError')
const sectionSignIn = document.getElementById('sectionSignIn')
const sectionSignUP = document.getElementById('sectionSignUp')
const messageError = document.getElementById('messageError')
const inputs = document.querySelectorAll('input')

if (buttonPassword) {
  buttonPassword.addEventListener('click', () => {
    const inputPassword = document.getElementById('password')
    if (inputPassword) {
      if (inputPassword.getAttribute('type') === 'password') {
        inputPassword.setAttribute('type', 'text')
      } else {
        inputPassword.setAttribute('type', 'password')
      }
    }
  })
}

if (form1) {
  form1.addEventListener('submit', (e) => {
    e.preventDefault()
    sectionSignIn.style.display = 'none'
    sectionSignUP.style.display = 'none'
    messageError.innerHTML = 'Error al iniciar sesión'
    sectionError.style.display = 'flex'
    form1.reset()
  })
}

if (form2) {
  form2.addEventListener('submit', (e) => {
    e.preventDefault()
    sectionSignIn.style.display = 'none'
    sectionSignUP.style.display = 'none'
    messageError.innerHTML = 'Error al registrarse'
    sectionError.style.display = 'flex'
    inputs.forEach(input => {
      input.value = ''
    })
  })
}

if (buttonBack) {
  buttonBack.addEventListener('click', () => {
    sectionError.style.display = 'none'
    sectionSignIn.style.display = 'flex'
    sectionSignUP.style.display = 'flex'
    inputs.forEach(input => {
      input.value = ''
    })
  })
}
