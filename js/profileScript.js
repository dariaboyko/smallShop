let USERS = [{
    id:1,
    role: 'admin',
    email:'admin@example.com',
    password:'12345'
},
{
    id:2,
    role: 'user',
    email:'daria@gmail.com',
    name: 'Daria Boyko',
    password:'12345'
},
{
    id:3,
    role: 'user',
    email:'katya@gmail.com',
    name: 'Katerina Petrova',
    password:'12345'
},
{
    id:4,
    role: 'user',
    email:'masha@gmail.com',
    name: 'Maria Kuznali',
    password:'12345'
}]
const profileElement2 = document.querySelector("#profileElement2")
const userEmail = document.querySelector("#userEmail")
document.addEventListener("DOMContentLoaded",()=>{userEmail.innerHTML=`${USERS[1].email}`})
const profileElement3 = document.querySelector("#profileElement3")
const userName = document.querySelector("#userName")
if(userName){document.addEventListener("DOMContentLoaded",()=>{userName.innerHTML=`${USERS[1].name}`})}
const profileElement4 = document.querySelector("#profileElement4")
const userNumber = document.querySelector("#userNumber")
if(userNumber){document.addEventListener("DOMContentLoaded",()=>{userNumber.innerHTML=`${USERS[1].number}`})}
const backButton = document.querySelector("#backButton")
if(backButton){backButton.addEventListener('click',()=>{location="settings.html";})}
const homeButton = document.querySelector("#homeButton")
homeButton.addEventListener('click',()=>{location="logedIn.html";})
if(profileElement2){profileElement2.addEventListener('click',()=>{location ="changeEmail.html"})}
const newEmail = document.querySelector('#newEmail')
const backButton2 = document.querySelector("#backButton2")
backButton2.addEventListener('click',()=>{location="profile.html";})
newEmail.addEventListener('keyup',()=>{
    USERS[1].email=newEmail.value;
})
