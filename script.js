const container = document.getElementById('container')
for (let i = 0; i < 1600; i++) {
    const gridSq = document.createElement("div");
    gridSq.classList.add('gridSq')
    container.append(gridSq)
}

const gridSq = document.getElementsByClassName('gridSq')
for (const square of gridSq) {
    square.addEventListener('mouseover', function() {
        square.classList.add('hoverOn')
    })    
}

const refreshBtn = document.getElementById('refreshBtn')
refreshBtn.addEventListener('click', function() {
    for (const square of gridSq) {
        square.classList.remove('hoverOn')   
    }
})