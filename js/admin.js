const USERS = [
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
}];
const users = document.querySelector('#users');
const createCardContent = (object) => {
  const {name, email} = object;
    const card = `<div class="adminElement"><div>Name: ${name}<div>
    <div>Email: ${email}<div></div>`;
    return card;
};
const generateContent = (array) => {

  users.innerHTML = '';

  let data = '';

  array.forEach((element) => {
    data += createCardContent(element);
  });

  if (!data) data = 'No data';

  users.innerHTML = data;
};
generateContent(USERS);
const backButton = document.querySelector("#backButton");
backButton.addEventListener('click', (e) => {
    e.preventDefault();
    location="index.html";
})