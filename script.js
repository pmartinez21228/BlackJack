let deck = [
    { image: "url('cards/2C.png')", isPlayed: false, value: 2 },
    { image: "url('cards/2D.png')", isPlayed: false, value: 2 },
    { image: "url('cards/2H.png')", isPlayed: false, value: 2 },
    { image: "url('cards/2S.png')", isPlayed: false, value: 2 },
    { image: "url('cards/3C.png')", isPlayed: false, value: 3 },
    { image: "url('cards/3D.png')", isPlayed: false, value: 3 },
    { image: "url('cards/3H.png')", isPlayed: false, value: 3 },
    { image: "url('cards/3S.png')", isPlayed: false, value: 3 },
    { image: "url('cards/4C.png')", isPlayed: false, value: 4 },
    { image: "url('cards/4D.png')", isPlayed: false, value: 4 },
    { image: "url('cards/4H.png')", isPlayed: false, value: 4 },
    { image: "url('cards/4S.png')", isPlayed: false, value: 4 },
    { image: "url('cards/5C.png')", isPlayed: false, value: 5 },
    { image: "url('cards/5D.png')", isPlayed: false, value: 5 },
    { image: "url('cards/5H.png')", isPlayed: false, value: 5 },
    { image: "url('cards/5S.png')", isPlayed: false, value: 5 },
    { image: "url('cards/6C.png')", isPlayed: false, value: 6 },
    { image: "url('cards/6D.png')", isPlayed: false, value: 6 },
    { image: "url('cards/6H.png')", isPlayed: false, value: 6 },
    { image: "url('cards/6S.png')", isPlayed: false, value: 6 },
    { image: "url('cards/7C.png')", isPlayed: false, value: 7 },
    { image: "url('cards/7D.png')", isPlayed: false, value: 7 },
    { image: "url('cards/7H.png')", isPlayed: false, value: 7 },
    { image: "url('cards/7S.png')", isPlayed: false, value: 7 },
    { image: "url('cards/8C.png')", isPlayed: false, value: 8 },
    { image: "url('cards/8D.png')", isPlayed: false, value: 8 },
    { image: "url('cards/8H.png')", isPlayed: false, value: 8 },
    { image: "url('cards/8S.png')", isPlayed: false, value: 8 },
    { image: "url('cards/9C.png')", isPlayed: false, value: 9 },
    { image: "url('cards/9D.png')", isPlayed: false, value: 9 },
    { image: "url('cards/9H.png')", isPlayed: false, value: 9 },
    { image: "url('cards/9S.png')", isPlayed: false, value: 9 },
    { image: "url('cards/10C.png')", isPlayed: false, value: 10 },
    { image: "url('cards/10D.png')", isPlayed: false, value: 10 },
    { image: "url('cards/10H.png')", isPlayed: false, value: 10 },
    { image: "url('cards/10S.png')", isPlayed: false, value: 10 },
    { image: "url('cards/JC.png')", isPlayed: false, value: 10 },
    { image: "url('cards/JD.png')", isPlayed: false, value: 10 },
    { image: "url('cards/JH.png')", isPlayed: false, value: 10 },
    { image: "url('cards/JS.png')", isPlayed: false, value: 10 },
    { image: "url('cards/QC.png')", isPlayed: false, value: 10 },
    { image: "url('cards/QD.png')", isPlayed: false, value: 10 },
    { image: "url('cards/QH.png')", isPlayed: false, value: 10 },
    { image: "url('cards/QS.png')", isPlayed: false, value: 10 },
    { image: "url('cards/KC.png')", isPlayed: false, value: 10 },
    { image: "url('cards/KD.png')", isPlayed: false, value: 10 },
    { image: "url('cards/KH.png')", isPlayed: false, value: 10 },
    { image: "url('cards/KS.png')", isPlayed: false, value: 10 },
    { image: "url('cards/AC.png')", isPlayed: false, value: 11 },
    { image: "url('cards/AD.png')", isPlayed: false, value: 11 },
    { image: "url('cards/AH.png')", isPlayed: false, value: 11 },
    { image: "url('cards/AS.png')", isPlayed: false, value: 11 },
]
let dealer1 = document.getElementById("card1");
let dealer2 = document.getElementById("card2");
let player1 = document.getElementById("card3");
let player2 = document.getElementById("card4");
let balance = document.getElementById("balance");
let credit = 1000;
let start = document.getElementById("start");
let reset = document.getElementById("reset");
let help = document.getElementById("help");
start.onclick = function(){
    alert(1)
}