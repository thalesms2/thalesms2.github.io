import { content } from './data/exp-data.js'

const divContent = document.getElementById('content')
const divSelectors = document.getElementById('selectors')

content.forEach((exp) => {
    const div = document.createElement('div')
    const title = document.createElement('h3')
    const description = document.createElement('p')

    title.innerText = exp.title
    description.innerText = exp.description
    div.classList.add('exp-card')

    div.appendChild(title)
    div.appendChild(description)
    divContent.appendChild(div)

    div.addEventListener("mouseover", () => { 
        description.innerText = exp.bodyText
        div.classList.toggle('exp-expanded')
    })
    div.addEventListener("mouseout", () => { 
        description.innerText = exp.description
        div.classList.toggle('exp-expanded')
    })
})
