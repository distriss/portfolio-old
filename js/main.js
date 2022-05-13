const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('navList')


function toggleHamburger() {
    navList.classList.toggle('show')    
    hamburgerButton.classList.toggle('color')    
}


hamburgerButton.addEventListener('click', toggleHamburger)