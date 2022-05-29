const button = document.getElementsByClassName('button')[0]
const navlinks = document.getElementsByClassName('navlinks')[0]

button.addEventListener('click', () => {navlinks.classList.toggle('active')})