const database = firebase.database()
const USER_ID = localStorage.getItem("user") 

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