function createImg(link, left, bottom) {
let item = document.createElement('img')
item.src = link
item.style.position = 'fixed'
item.style.left = left + 'px'
item.style.bottom = bottom + 'px'
document.body.append(item)
return item
}
function newPlayer(link) {
    let player = document.createElement('img')
    player.src = link
    document.body.append(player)
    return player
}
function move(img, left, bottom) {
img.style.position = 'fixed'
img.style.left = left + 'px'
img.style.bottom = bottom + 'px'
}
newPlayer('pic/redSquare.png')













//npcs
createImg('pic/2ndCar.png', 1, 45)
createImg('pic/2ndCar.png', 1, 800)

createImg('pic/semiTruck.png', 1, 600)
createImg('pic/semiTruck.png', 1, 750)


createImg('pic/racerCar.png', 1, 700)
createImg('pic/racerCar.png', 1, 300)

createImg('pic/slowCar.png', 1, 550)
createImg('pic/slowCar.png', 1, 500)
