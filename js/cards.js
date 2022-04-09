import { content } from './data/card-data.js'

const slider = document.getElementById('slider')

content.forEach((content) => {
    const card = document.createElement('div')
    card.classList.add('card')
    const img = document.createElement('div')
    img.classList.add('img-wrapper')
    const title = document.createElement('h3')
    const description = document.createElement('p')
    const buttons = document.createElement('div')
    buttons.classList.add('btn-wrapper')
    const demo = document.createElement('a')
    const repo = document.createElement('a')
    
    img.style.backgroundImage = `url(./${content.img})`
    title.innerText = content.title
    description.innerText = content.description
    demo.setAttribute('href', content.demo)
    demo.setAttribute('target', "_blank")
    demo.innerText = 'Demo'
    repo.setAttribute('href', content.repo)
    repo.setAttribute('target', "_blank")
    repo.innerText = 'repo'

    buttons.appendChild(demo)
    buttons.appendChild(repo)
    card.appendChild(img)
    card.appendChild(title)
    card.appendChild(description)
    card.appendChild(buttons)
    slider.appendChild(card)
})



