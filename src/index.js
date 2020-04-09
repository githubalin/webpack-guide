import _ from 'lodash'
import './style.css'
import Img from './2.jpg'

function component() {
    const element = document.createElement('div')
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    element.classList.add('hello')
    const myImg = new Image()
    myImg.src = Img
    element.appendChild(myImg)
    return element
}

document.body.appendChild(component())