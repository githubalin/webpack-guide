function component() {
    const element = document.createElement('pre');
    element.innerHTML = 'hello webpack111'
    a = b;
    return element
}

document.body.appendChild(component())