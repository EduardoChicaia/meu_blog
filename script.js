//Menu Hamburguer
const menuHamburger = document.querySelector('.Menu-hamburger')
    menuHamburger.addEventListener('click', ()=>{
    mudandoMenu()
})

function mudandoMenu() {
    const nav = document.querySelector('.nav-Responsivo')
    menuHamburger.classList.toggle('Change')

    if (menuHamburger.classList.contains('Change')){
        nav.style.display='block'

    } else {
        nav.style.display='none'

    }
}