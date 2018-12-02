const button = document.querySelector('.btn-codigo-de-conduta')
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

const database = firebase.database()
const USER_ID = localStorage.getItem("user") 

const sendBtn= document.querySelector('.btn-send-message')
sendBtn.addEventListener('click', getInputValue)

function generateNewMessage (msg){
  database.ref("users/" + USER_ID).once("value")
  .then(function(snapshot) {
   const user = snapshot.val().nome
    const ul = document.querySelector('.forum-messages')
    const li = document.createElement('li')
    li.setAttribute('class', 'forum-message')
    li.innerHTML = `<span class='user-name'>${user}</span>
    ${msg}`
    ul.appendChild(li)
    writeNewPost(user, msg)
  })
}

function getInputValue (){
  const textarea = document.querySelector('textarea')
  let msg = textarea.value
  if(msg.trim()){generateNewMessage(msg)}
  clearInput()
  textarea.focus()
}

function clearInput(){
  const textarea = document.querySelector('textarea')
  textarea.value = ''
}

function writeNewPost(username, body) {
 const  postData = {
    author: username,
    body: body,
  };
  const newPostKey = firebase.database().ref().child('posts').push().key;
  let updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/'  + newPostKey] = postData;
  return firebase.database().ref().update(updates);
}


database.ref("user-posts/"  ).once("value")
.then(function(snapshot) {
  snapshot.forEach(function(item){
    const ul = document.querySelector('.forum-messages')
    ul.innerHTML += `<li class='forum-message'><span class='user-name'>${item.val().author}</span>${item.val().body}</>`
    console.log(item.val())
  })
})

 

// Mostrar nome do usuário logado na tela 
database.ref("users/" + USER_ID).once("value")
  .then(function(snapshot) {
    snapshot.forEach(s => {
      const userInfo = s.node_.value_
      const showName = document.getElementsByClassName("show-name")[0]
      showName.innerHTML = userInfo
    })
  })

// Logout
const logoutBtn = document.getElementsByClassName("logout-btn")[0]
logoutBtn.addEventListener("click", redirectToIndex)

function redirectToIndex() {
  window.location = '../../../index.html'
}