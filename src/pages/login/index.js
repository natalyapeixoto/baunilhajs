// FIREBASE login cadastro
  const database = firebase.database()
  document.getElementById('cadastro-btn').addEventListener('click', signUpClick)
  document.getElementById('login-btn').addEventListener('click', signInClick)

  function signUpClick(e){
    e.preventDefault()
    console.log(e)
    const loadingGif = document.getElementById('loading-gif-login')
    const nome = document.getElementById('nome')
    const email = document.getElementById('cadastro-email')
    const password = document.getElementById('cadastro-password')
    const nomeArg = nome.value
    const emailArg = email.value
    const passArg = password.value
    loadingGif.innerHTML = `<img id="loading" src="loading.gif">`
    registerNewUser(nomeArg, emailArg, passArg)
  }

  
  function registerNewUser(nome, email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function(response) {
        const userId = response.user.uid;
        database.ref("users/" + userId).set({
          nome: nome,
          email: email,
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
      const loadingGif = document.getElementById('loading-gif-cadastro')
      loadingGif.innerHTML = `<img  src="../../loading.gif">`
      singInUser(email, password)
     
  }

  function singInUser(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((response)=> {
      const userId = response.user.uid;
      redirectToHome(userId)
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


