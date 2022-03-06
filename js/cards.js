const cards = document.querySelector('[cards]')

const content = [
    ["Calculadora", "Feito em React", "img/calculadora.png", "https://thalesms2-calculator-react.netlify.app/"],
    ["Forum Senai", "Projeto Mundo Senai", "img/mundosenai.png", "https://thalesms2-mundo-senai.herokuapp.com/"],
    ["Flappy Bird", "Somente Javascript", "img/flappy.png", "https://thalesms2.github.io/flappybirdJS/"],
    ["Landing page", "HTML|CSS Puro", "img/ballerini.png", "https://thalesms2.github.io/landingPageRBallerini/"]
    // ["Advocacia", "Landing Page", "img/jhemila.png", "#link"],
    // ["Johanna Links", "Landing Page", "img/joh.png", "#link"]
]

content.forEach((card) => {
    const link = document.createElement('a')
    const div = document.createElement('div')
    const divWrapper = document.createElement('div')
    const divImg = document.createElement('div')
    const spanTitle = document.createElement('span')
    const spanDescription = document.createElement('span')
    
    link.setAttribute('href', card[3])
    link.setAttribute('target', "_blank")
    div.classList.add('card')
    divImg.classList.add('img-card')
    divImg.style.backgroundImage = `url('../${card[2]}')`
    spanTitle.classList.add('span-title')
    spanDescription.classList.add('span-description')
    spanTitle.innerHTML = card[0]
    spanDescription.innerHTML = card[1]

    divWrapper.appendChild(divImg)
    div.appendChild(divWrapper)
    div.appendChild(spanTitle)
    div.appendChild(spanDescription)
    link.appendChild(div)
    cards.appendChild(link)    
})



