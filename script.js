const container = document.getElementById('container')
for (let i = 0; i < 1600; i++) {
    const gridSq = document.createElement("div");
    gridSq.classList.add('gridSq')
    container.append(gridSq)
}

const gridSq = document.getElementsByClassName('gridSq')
for (const square of gridSq) {
    square.addEventListener('mouseover', function() {
        square.setAttribute(
            'style',
            'background-color:#ff70a6',
          );
    })    
}

const refreshBtn = document.getElementById('refreshBtn')
refreshBtn.addEventListener('click', function() {
    for (const square of gridSq) {
        square.setAttribute(
            'style',
            'background-color:transparent',
          );   
    }
})

const settingsBtn = document.getElementById('settingsBtn')
const settingsPopUpDiv = document.getElementById('settingsPopUp')
const popUpBackground = document.getElementById('popUpBackground')

settingsBtn.addEventListener('click', function() {
    settingsPopUpDiv.classList.toggle('noDisplay')
    popUpBackground.classList.toggle('noDisplay')
})

popUpBackground.addEventListener('click', function() {
    settingsPopUpDiv.classList.toggle('noDisplay')
    popUpBackground.classList.toggle('noDisplay')
})

const setBtn = document.getElementById('setBtn')
setBtn.addEventListener('click', function() {
    settingsPopUpDiv.classList.toggle('noDisplay')
    popUpBackground.classList.toggle('noDisplay')
})

// 100% dividido pelo numero do input value pra saber o tamanho do width e height em porcentagem
// definir o tamanho dos quadrados de acordo com a divisao
// resultado x resultado pra saber quantos quadrados cabem no container


const sqSlider = document.getElementById('sqSlider')
var sqSliderOutput = document.getElementById('sqSliderOutput')
sqSliderOutput.innerHTML = `${sqSlider.value} x ${sqSlider.value}`
sqSlider.oninput = function() {
    sqSliderOutput.innerHTML = `${this.value} x ${this.value}`
}

const colorOptions = document.getElementById('colorOptions')
colorOptions.addEventListener('click', function(e) {
    console.log(
        "%c"+e.target.dataset.color,
        "background-color: #" + e.target.dataset.color
      );
    for (const square of gridSq) {
        square.addEventListener('mouseover', function() {
            square.setAttribute(
                'style',
                "background-color: #" + e.target.dataset.color
              );
        })     
    }
})
