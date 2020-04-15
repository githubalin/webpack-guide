function component() {
    const element = document.createElement('div')
    element.innerHTML = join(['Hello', 'webpack'], ' ')
    alert('xixi')
    return element
}

document.body.appendChild(component())