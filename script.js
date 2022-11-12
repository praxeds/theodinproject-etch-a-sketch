const settingsBtn = document.getElementById('settingsBtn')
const settingsPopUpDiv = document.getElementById('settingsPopUp')
const popUpBackground = document.getElementById('popUpBackground')
const gridSq = document.getElementsByClassName('gridSq')



settingsBtn.addEventListener('click', function () {
    settingsPopUpDiv.classList.toggle('noDisplay')
    popUpBackground.classList.toggle('noDisplay')
})

popUpBackground.addEventListener('click', function () {
    settingsPopUpDiv.classList.toggle('noDisplay')
    popUpBackground.classList.toggle('noDisplay')
})


const setBtn = document.getElementById('setBtn')
setBtn.addEventListener('click', function () {
    createGrid()
    settingsPopUpDiv.classList.toggle('noDisplay')
    popUpBackground.classList.toggle('noDisplay')
    
})

const refreshBtn = document.getElementById('refreshBtn')
refreshBtn.addEventListener('click', function () {
    for (let i = 0; i < gridSq.length; i++) {
        const square = gridSq[i]
        square.style.background = 'transparent'
    }
})


const sqSlider = document.getElementById('sqSlider')
var sqSliderOutput = document.getElementById('sqSliderOutput')
sqSliderOutput.innerHTML = `${sqSlider.value} x ${sqSlider.value}`
sqSlider.oninput = function () {
    sqSliderOutput.innerHTML = `${this.value} x ${this.value}`
}

function createGrid(){
    let gridSqSize = 100 / sqSlider.value
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
        for (let i = 0; i < sqDifference; i++) {
            gridSq[i].remove()
        }
    }
    for (let i = 0; i < gridSq.length; i++) {
        const square = gridSq[i]
        square.style.background = 'transparent'
    }
    for (let i = 0; i < gridSq.length; i++) {
        const square = gridSq[i]
        square.addEventListener('mouseover', function () {
            square.style.background = '#ff70a6'
        })
    }
}

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

createGrid()



// const container = document.getElementById('container')
// for (let i = 0; i < 1600; i++) {
//     const gridSq = document.createElement("div");
//     gridSq.classList.add('gridSq')
//     gridSq.style.width = '2.5%'
//     gridSq.style.height = '2.5%'
//     gridSq.style.border = '1px dotted black'
//     container.append(gridSq)
// }


