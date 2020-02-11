let deck = [
  "url('cards/2C.png')",
  "url('cards/2D.png')",
  "url('cards/2H.png')",
  "url('cards/2S.png')",
  "url('cards/3C.png')",
  "url('cards/3D.png')",
  "url('cards/3H.png')",
  "url('cards/3S.png')",
  "url('cards/4C.png')",
  "url('cards/4D.png')",
  "url('cards/4H.png')",
  "url('cards/4S.png')",
  "url('cards/5C.png')",
  "url('cards/5D.png')",
  "url('cards/5H.png')",
  "url('cards/5S.png')",
  "url('cards/6C.png')",
  "url('cards/6D.png')",
  "url('cards/6H.png')",
  "url('cards/6S.png')",
  "url('cards/7C.png')",
  "url('cards/7D.png')",
  "url('cards/7H.png')",
  "url('cards/7S.png')",
  "url('cards/8C.png')",
  "url('cards/8D.png')",
  "url('cards/8H.png')",
  "url('cards/8S.png')",
  "url('cards/9C.png')",
  "url('cards/9D.png')",
  "url('cards/9H.png')",
  "url('cards/9S.png')",
  "url('cards/10C.png')",
  "url('cards/10D.png')",
  "url('cards/10H.png')",
  "url('cards/10S.png')",
  "url('cards/JC.png')",
  "url('cards/JD.png')",
  "url('cards/JH.png')",
  "url('cards/JS.png')",
  "url('cards/QC.png')",
  "url('cards/QD.png')",
  "url('cards/QH.png')",
  "url('cards/QS.png')",
  "url('cards/KC.png')",
  "url('cards/KD.png')",
  "url('cards/KH.png')",
  "url('cards/KS.png')",
  "url('cards/AC.png')",
  "url('cards/AD.png')",
  "url('cards/AH.png')",
  "url('cards/AS.png')",
]
function randomCard(){
  let rand = Math.floor(Math.random() * 52)
  return rand;
}
let outline = document.querySelector(".outline");
outline.onclick = function () {
  outline.style.backgroundImage = deck[randomCard()]
}

let test = [
  {
    card: "url('cards/2C.png')",
    value: 2,
  }
]