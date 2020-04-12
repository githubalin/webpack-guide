const component = () => {
    const ele = document.createElement('div')
    const btn = document.createElement('button')
    btn.innerHTML = 'load dynamic module'
    btn.onclick = () => {
        // load lodash until click btn
        import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
            console.log(_.join(['hello', 'webpack'], ' '))
        })
    }
    ele.appendChild(btn)
    return ele
}

document.body.appendChild(component())
