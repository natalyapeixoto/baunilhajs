const linkTosignUp = document.querySelector('.link-cadastro')
linkTosignUp.addEventListener('click', function(e){
  e.preventDefault()
  const login = document.querySelector('.form-container')
  login.style.display = 'none'
  const signUp= document.querySelector(".cadastro-form-container")
  signUp.style.display = 'flex'
})
const linkTologin = document.querySelector('.link-login')
linkTologin.addEventListener('click', function(e){
  e.preventDefault()
  const login = document.querySelector('.form-container')
  login.style.display = 'flex'
  const signUp= document.querySelector(".cadastro-form-container")
  signUp.style.display = 'none'
})


const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;


const inputEmail = document.getElementById('login-email')
inputEmail.addEventListener('change', function(e){
  const loginDisplayMailError = document.querySelector('.login-email-error')
  if(inputEmail.value.match(regex)){
    loginDisplayMailError.textContent = ''
  } else {
    loginDisplayMailError.textContent = 'digite um e-mail válido'
  }
})


 const inputEmailCadastro = document.getElementById('cadastro-email') 
inputEmailCadastro.addEventListener('change', function(e){
   const cadastroDisplayEmailError = document.querySelector('.cadastro-email-error')
  if(inputEmailCadastro.value.match(regex)){
    cadastroDisplayEmailError.textContent =''
  } else{
    cadastroDisplayEmailError.textContent ='digite um e-mail válido'
  }
})

const inputPasswordCadastro = document.getElementById('cadastro-password')
inputPasswordCadastro.addEventListener('change', function(e){
   const cadastroDisplayPasswordError = document.querySelector('.cadastro-password-error')
  if(inputPasswordCadastro.value <= 6){
    cadastroDisplayPasswordError.textContent =''
  } else{
    cadastroDisplayPasswordError.textContent ='sua senha deve ter mais de 6 dígitos'
  }
})

const inputPasswordConfCadastro = document.getElementById('cadastro-conf-password')
inputPasswordConfCadastro.addEventListener('change', function(e){
  const cadastroDisplayPasswordConfError = document.querySelector('.cadastro-password-conf-error')
  if(inputPasswordConfCadastro.value !== inputPasswordCadastro.value){
    cadastroDisplayPasswordConfError.textContent ='senha não está igual'
  } else{
    cadastroDisplayPasswordConfError.textContent =''
  }
})


