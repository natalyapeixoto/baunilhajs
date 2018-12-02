


// FIREBASE login cadastro
const database = firebase.database()
  const email =  document.getElementById('cadastro-btn')
  email.addEventListener('click', signUpClick)
  document.getElementById('login-btn').addEventListener('click', signInClick)

  function signUpClick(e){
    e.preventDefault()
    console.log(e)
    const email = document.getElementById('cadastro-email')
    const password = document.getElementById('cadastro-password')
    const emailArg =  email.value
    const passArg = password.value
    registerNewUser(emailArg, passArg)
  }

  
  function registerNewUser( email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function(response) {
        console.log(response)
        const userId = response.user.uid;
        database.ref("users/" + userId).set({
          email: email,
          password: password
        });
        redirectToHome(userId);
      })
      .catch(function(error) {
        handleError(error);
      });
  }

  function signInClick(e){
    e.preventDefault()
      const email = document.getElementById('login-email').value
      const password = document.getElementById('login-password').value
      console.log(email)
      singInUser(email, password)
     
  }

  function singInUser(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((res)=> {
      redirectToHome(res)
    })
    .catch((error)=>{
      handleError(error)
      loginDisplayMailError.textContent = error
    })
  }

  function handleError(err) {
    console.log(err)
    if(err.code === 'auth/wrong-password'){
      const loginDisplayPasswordError = document.querySelector('.login-password-error')
      loginDisplayPasswordError.textContent = 'Senha incorreta'
    }
    if(err.code === 'auth/user-not-found'){
    const loginDisplayMailError = document.querySelector('.login-email-error')
    loginDisplayMailError.textContent = 'Email não cadastrado'
    }
  }

  function redirectToHome(user){
    localStorage.setItem("user", user)
    window.location = '../home/home.html'
  }

 
