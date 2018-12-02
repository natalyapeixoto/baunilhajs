function handleDisplayForm (){
  const form =  document.querySelector('.form-container')
  form.style.display = 'flex'
}

function handleDisplayLoadingPage(){
  window.location = './src/pages/login/login.html'
}
setInterval(handleDisplayForm , 3225);
setInterval(handleDisplayLoadingPage, 3100);
