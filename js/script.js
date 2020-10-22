let maVoiture = document.querySelector('.voiture')
let positionInitiale = maVoiture.style.left
let voitureRotate = false

function faireBouger(direction, rotation) {
  positionInitiale = +positionInitiale + direction
  if (voitureRotate == false) {
  document.querySelector('.voiture').style.left = positionInitiale + 'px'
  } else {
    document.querySelector('.voiture').style.top = positionInitiale + 'px'
  }
}

function faireTourner(direction, rotation) {
  let positionInitial = maVoiture.style.transform
  document.querySelector('.voiture').style.transform = positionInitial + 'rotate(90deg)'
  voitureRotate = !voitureRotate
}