!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){const n=firebase.database();function o(e){if(console.log(e),"auth/wrong-password"===e.code){document.querySelector(".login-password-error").textContent="Senha incorreta"}if("auth/user-not-found"===e.code){document.querySelector(".login-email-error").textContent="Email não cadastrado"}}function r(e){localStorage.setItem("user",e),window.location="../home/home.html"}document.getElementById("cadastro-btn").addEventListener("click",function(e){e.preventDefault(),console.log(e);const t=document.getElementById("nome"),u=document.getElementById("cadastro-email"),a=document.getElementById("cadastro-password"),c=t.value,l=u.value,i=a.value;!function(e,t,u){firebase.auth().createUserWithEmailAndPassword(t,u).then(function(o){const u=o.user.uid;n.ref("users/"+u).set({nome:e,email:t}),r(u)}).catch(function(e){o(e)})}(c,l,i)}),document.getElementById("login-btn").addEventListener("click",function(e){e.preventDefault();const t=document.getElementById("login-email").value,n=document.getElementById("login-password").value;console.log(t),function(e,t){firebase.auth().signInWithEmailAndPassword(e,t).then(e=>{const t=e.user.uid;r(t)}).catch(e=>{o(e),loginDisplayMailError.textContent=e})}(t,n)})}]);