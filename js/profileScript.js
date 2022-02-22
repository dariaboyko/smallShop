const USERS = [{
    id:1,
    role: 'admin',
    email:'admin@example.com',
    password:'12345'
},
{
    id:2,
    role: 'user',
    name:'Daria Boyko',
    email:'daria@gmail.com',
    number:'+380637746363',
    password:'12345'
}]
const profileElement2 = document.querySelector("#profileElement2")
const userEmail = document.querySelector("#userEmail")
document.addEventListener("DOMContentLoaded",()=>{userEmail.innerHTML=`${USERS[1].email}`})
const profileElement3 = document.querySelector("#profileElement3")
const userName = document.querySelector("#userName")
document.addEventListener("DOMContentLoaded",()=>{userName.innerHTML=`${USERS[1].name}`})
const profileElement4 = document.querySelector("#profileElement4")
const userNumber = document.querySelector("#userNumber")
document.addEventListener("DOMContentLoaded",()=>{userNumber.innerHTML=`${USERS[1].number}`})
const backButton = document.querySelector("#backButton")
backButton.addEventListener('click',()=>{location="settings.html";})
const homeButton = document.querySelector("#homeButton")
homeButton.addEventListener('click',()=>{location="logedIn.html";})