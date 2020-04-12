import _ from 'lodash'
import printMe from './print'
import './style.css'

function component() {
    const element = document.createElement('div')
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')

    const btn = document.createElement('button')
    btn.innerHTML = 'click me and check the console'
    btn.onclick = printMe
    btn.classList.add('hello10')

    element.appendChild(btn)

    return element
}

document.body.appendChild(component())