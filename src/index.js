import _ from 'lodash'
import a from './a'

const component = () => {
    const ele = document.createElement('div')
    const btn = document.createElement('button')
    btn.innerHTML = 'load dynamic module!1`2123123'
    ele.appendChild(btn)
    ele.onclick = a.bind(null)
    return ele
}

document.body.appendChild(component())
