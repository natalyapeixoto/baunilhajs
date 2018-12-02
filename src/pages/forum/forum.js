const button = document.querySelector('button')
button.addEventListener('click', showDiv )

function  showDiv (e){
  const div = document.querySelector('.codigo-de-conduta');
  div.classList.toggle( 'show-codigo-de-conduta')
  if(div.classList.contains('show-codigo-de-conduta')){
    button.textContent = 'Fechar Código de Conduta'
    } else{
      button.textContent = 'Clique aqui para ler'
    }  
}


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    const userEmail =  user.email
    console.log(userEmail)
  } else {
    console.log('ops')
  }
});

function sendMessage (msg){
    const ul = document.querySelector('.forum-messages')
    const li = document.createElement('li')
    li.textContent = msg;
    ul.appendChild(li)
}

function writeMessage (input){
  const textarea = document.querySelector('textarea')
  const msg = textarea.value
  sendMessage(msg)
}