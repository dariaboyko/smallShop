const backButton = document.querySelector("#backButton");
backButton.addEventListener('click', (e) => {
    e.preventDefault();
    location="logedIn.html";
})
const settingElement2 = document.querySelector("#settingElement2")
settingElement2.addEventListener('click',()=>{location="profile.html";})
const settingElement3 = document.querySelector("#settingElement3")
settingElement3.addEventListener('click',()=>{location="discounts.html";})
const settingElement4 = document.querySelector("#settingElement4")
settingElement4.addEventListener('click',()=>{location="delivery.html";})
const settingElement5 = document.querySelector("#settingElement5")
settingElement5.addEventListener('click',()=>{location="returns.html";})
const settingElement6 = document.querySelector("#settingElement6")
settingElement6.addEventListener('click',()=>{location="helpCenter.html";})
const homeButton = document.querySelector("#homeButton")
homeButton.addEventListener('click',()=>{location="logedIn.html";})