const menuBtn = document.querySelector('.menu-btn')
const nav = document.getElementById('nav')

let menuOpen = false
menuBtn.addEventListener('click', (e) =>{
    if(!menuOpen) {
        menuBtn.classList.add('open')
        menuOpen = true
    } else {
        menuBtn.classList.remove('open')
        menuOpen = false
    }
    nav.classList.toggle('none')
    console.log(e)
})

menuBtn.addEventListener('mouseover', (e) => {
    menuBtn.classList.toggle('hover')
})
menuBtn.addEventListener('mouseout', (e) => {
    menuBtn.classList.toggle('hover')
})