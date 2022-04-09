const buttons = document.querySelectorAll('#nextPage')
const portfolio = document.getElementById('portfolio')
const about = document.getElementById('about')
const contact = document.getElementById('contact')
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.path[1].classList.toggle('none')
        if(e.path[1] === about) {
            portfolio.classList.toggle('none')
        } else if (e.path[1] === portfolio) {
            contact.classList.toggle('none')
        }
    })
})