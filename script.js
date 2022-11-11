const container = document.getElementById('container')
for (let i = 0; i < 1600; i++) {
    const gridSq = document.createElement("div");
    gridSq.classList.add('gridSq')
    gridSq.style.width = '2.5%'
    gridSq.style.height = '2.5%'
    gridSq.style.border = '1px dotted black'
    container.append(gridSq)
}

const gridSq = document.getElementsByClassName('gridSq')
for (let i = 0; i < gridSq.length; i++) {
    const square = gridSq[i]
    square.addEventListener('mouseover', function () {
        square.style.background = '#ff70a6'
    })
}

const refreshBtn = document.getElementById('refreshBtn')
refreshBtn.addEventListener('click', function () {
    for (let i = 0; i < gridSq.length; i++) {
        const square = gridSq[i]
        square.style.background = 'transparent'
    }
})

const settingsBtn = document.getElementById('settingsBtn')
const settingsPopUpDiv = document.getElementById('settingsPopUp')
const popUpBackground = document.getElementById('popUpBackground')


settingsBtn.addEventListener('click', function () {
    settingsPopUpDiv.classList.toggle('noDisplay')
    popUpBackground.classList.toggle('noDisplay')
})

popUpBackground.addEventListener('click', function () {
    settingsPopUpDiv.classList.toggle('noDisplay')
    popUpBackground.classList.toggle('noDisplay')
})

const sqSlider = document.getElementById('sqSlider')
var sqSliderOutput = document.getElementById('sqSliderOutput')
sqSliderOutput.innerHTML = `${sqSlider.value} x ${sqSlider.value}`
sqSlider.oninput = function () {
    sqSliderOutput.innerHTML = `${this.value} x ${this.value}`
}

let gridSqSize

const setBtn = document.getElementById('setBtn')
setBtn.addEventListener('click', function () {
    settingsPopUpDiv.classList.toggle('noDisplay')
    popUpBackground.classList.toggle('noDisplay')
    //!100% dividido pelo numero do input value pra saber o tamanho do width e height de cada quadrado em porcentagem
    //!definir o tamanho dos quadrados de acordo com a divisao
    //!resultado x resultado pra saber quantos quadrados cabem no container
    gridSqSize = 100 / sqSlider.value
    containerAreaSq = sqSlider.value * sqSlider.value
    for (let i = 0; i < containerAreaSq; i++) {
        const gridSq = document.createElement("div");
        gridSq.classList.add('gridSq')
        container.append(gridSq)
        gridSq.style.border = '1px dotted black'
    }
    for (let i = 0; i < gridSq.length; i++) {
        const square = gridSq[i]
        square.style.width = gridSqSize + '%'
        square.style.height = gridSqSize + '%'
    }
    if (gridSq.length > containerAreaSq) {
        const sqDifference = gridSq.length - containerAreaSq
        console.log(sqDifference)
        for (let i = 0; i < sqDifference; i++) {
            gridSq[i].remove()
        }
    }
    for (let i = 0; i < gridSq.length; i++) {
        const square = gridSq[i]
        square.style.background = 'transparent'
    }

})

const colorOptions = document.getElementById('colorOptions')
colorOptions.addEventListener('click', function (e) {
    console.log(
        "%c" + e.target.dataset.color,
        "background-color: #" + e.target.dataset.color
    )
    for (const square of gridSq) {
        square.addEventListener('mouseover', function () {
            square.style.background = `#${e.target.dataset.color}`
        })
    }
})
