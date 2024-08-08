const container = document.querySelector('.container');

for (let i = 1; i <= 50; i++) {
    const kolom = document.createElement('div');
    kolom.classList.add('bagian')
    container.appendChild(kolom)

    const gambar = document.createElement('img')
    gambar.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    gambar.classList.add('gambar')
    kolom.appendChild(gambar)

    const kaption = document.createElement('span')
    kaption.append(`pokemon ${i}`)
    kolom.appendChild(kaption)
}