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
let bet = document.getElementById("bet");
let activeBet = 0;
let chip10 = document.getElementById("10");
let chip20 = document.getElementById("20");
let chip50 = document.getElementById("50");
let chip100 = document.getElementById("100");
let card = "url('cards/red_back.png')"
let playerCount = 0;
let dealerCount = 0;
let rand = null;
let isPlaying = false;

function restart(){
    deck.forEach(function(x){
        x.isPlayed = false;
    })
    dealer1.style.backgroundImage = null;
    dealer2.style.backgroundImage = null;
    player1.style.backgroundImage = null;
    player2.style.backgroundImage = null;
    playerCount = 0;
    dealerCount = 0;
    credit = 1000;
    balance.innerHTML = credit;
}
function randNum() {
    rand = Math.floor(Math.random() * 52)
}
function displayBack() {
    setTimeout(function () {
        dealer1.style.backgroundImage = card
    }, 500)
    setTimeout(function () {
        dealer2.style.backgroundImage = card
    }, 1000)
    setTimeout(function () {
        player1.style.backgroundImage = card
    }, 1500)
    setTimeout(function () {
        player2.style.backgroundImage = card
    }, 2000)
}
function displayFront() {
    setTimeout(function () {
        randNum()
        if (!deck[rand].isPlayed) {
            dealer1.style.backgroundImage = deck[rand].image
            dealerCount = dealerCount + deck[rand].value
            deck[rand].isPlayed = true;
        } else {
            while (deck[rand].isPlayed) {
                randNum()
            }
            dealer1.style.backgroundImage = deck[rand].image
            dealerCount = dealerCount + deck[rand].value
            deck[rand].isPlayed = true;
        }

    }, 2500)
    setTimeout(function () {
        randNum()
        if (!deck[rand].isPlayed) {
            player1.style.backgroundImage = deck[rand].image
            playerCount = playerCount + deck[rand].value
            deck[rand].isPlayed = true;
        } else {
            while (deck[rand].isPlayed) {
                randNum()
            }
            player1.style.backgroundImage = deck[rand].image
            playerCount = playerCount + deck[rand].value
            deck[rand].isPlayed = true;
        }

    }, 3000)
    setTimeout(function () {
        randNum()
        if (!deck[rand].isPlayed) {
            player2.style.backgroundImage = deck[rand].image
            playerCount = playerCount + deck[rand].value
            deck[rand].isPlayed = true;
        } else {
            while (deck[rand].isPlayed) {
                randNum()
            }
            player2.style.backgroundImage = deck[rand].image
            playerCount = playerCount + deck[rand].value
            deck[rand].isPlayed = true;
        }

    }, 3500)
}
function startGame() {
    displayBack()
    setTimeout(displayFront(), 2500)
}
start.onclick = function () {
    if (!isPlaying) {
        startGame()
        isPlaying = true;
    }
}

reset.onclick = function(){
    restart()
}