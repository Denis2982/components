const logregCard = document.querySelector('.form__card');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () =>{
    logregCard.classList.add('active');
});
loginLink.addEventListener('click', () =>{
    logregCard.classList.remove('active');
});