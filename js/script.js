const USERS = [{
    id:1,
    role: 'admin',
    email:'admin@example.com',
    password:'12345'
},
{
    id:2,
    role: 'user',
    email:'daria@gmail.com',
    password:'12345'
}]
const getStartedButton = document.querySelector("#getStartedButton");
const content = document.getElementById("content");
const footer = document.getElementById("footer");
const backButton1 = document.querySelector("#backButton1");
const backButton2 = document.querySelector("#backButton2");
const signUpLink = document.querySelector("#signUpLink");
const loginForm = document.querySelector("#loginForm");
const createStyle = document.querySelector("#createStyle");
const mainBackground = document.querySelector("#mainBackground");
const loginpass=document.querySelector("#userPassword");
const loginemail=document.querySelector("#userEmail");
const signUpTitle=document.querySelector("#signUpTitle");
const signUpForms=document.querySelector("#signUpForms");
const startingPage=`<div class="mainBack"></div>
        <h1 class="mainTitle">Create your own style</h1>`
getStartedButton.addEventListener("click",()=>{
    createStyle.classList.add("displayNone")
    loginForm.classList.remove("displayNone")
    footer.classList.remove("displayNone")
    backButton1.classList.remove("displayNone")
    getStartedButton.classList.add("displayNone")
    mainBackground.classList.add("darkened","activeBackImg")
})
backButton1.addEventListener("click",()=>{
    createStyle.classList.remove("displayNone")
    loginForm.classList.add("displayNone")
    footer.classList.add("displayNone")
    backButton1.classList.add("displayNone")
    getStartedButton.classList.remove("displayNone")
    mainBackground.classList.remove("darkened","activeBackImg")
})
signUpLink.addEventListener("click",(event)=>{
    event.preventDefault();
    signUpForms.classList.remove("displayNone")
    backButton1.classList.add("displayNone")
    backButton2.classList.remove("displayNone")
    signUpTitle.classList.remove("displayNone")
    loginForm.classList.add("displayNone")
})
backButton2.addEventListener("click",()=>{
    backButton2.classList.add("displayNone")
    signUpForms.classList.add("displayNone")
    signUpTitle.classList.add("displayNone")
    backButton1.classList.remove("displayNone")
    loginForm.classList.remove("displayNone")
})
document.forms.login.addEventListener('submit', (e) => {
    e.preventDefault();
  let curEmail = document.forms.login.elements.email.value;
  let curPassword = document.forms.login.elements.password.value;
  const filteredUsers = USERS.filter(user=>{return user.email===curEmail});
  let filteredUser = filteredUsers[0]
  if(filteredUser){
    if(filteredUser.password===curPassword){
    loginpass.classList.remove("redBorder")
    loginemail.classList.remove("redBorder")
    if(filteredUser.role==="admin"){
        location="adminLog.html";

    }else{location="logedIn.html";}
        }
    else{loginpass.classList.add("redBorder")}
   }
   else{loginemail.classList.add("redBorder")}
})




