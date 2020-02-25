let deck = [
    { image: "url('cards/2C.png')", value: 2 },
    { image: "url('cards/2D.png')", value: 2 },
    { image: "url('cards/2H.png')", value: 2 },
    { image: "url('cards/2S.png')", value: 2 },
    { image: "url('cards/3C.png')", value: 3 },
    { image: "url('cards/3D.png')", value: 3 },
    { image: "url('cards/3H.png')", value: 3 },
    { image: "url('cards/3S.png')", value: 3 },
    { image: "url('cards/4C.png')", value: 4 },
    { image: "url('cards/4D.png')", value: 4 },
    { image: "url('cards/4H.png')", value: 4 },
    { image: "url('cards/4S.png')", value: 4 },
    { image: "url('cards/5C.png')", value: 5 },
    { image: "url('cards/5D.png')", value: 5 },
    { image: "url('cards/5H.png')", value: 5 },
    { image: "url('cards/5S.png')", value: 5 },
    { image: "url('cards/6C.png')", value: 6 },
    { image: "url('cards/6D.png')", value: 6 },
    { image: "url('cards/6H.png')", value: 6 },
    { image: "url('cards/6S.png')", value: 6 },
    { image: "url('cards/7C.png')", value: 7 },
    { image: "url('cards/7D.png')", value: 7 },
    { image: "url('cards/7H.png')", value: 7 },
    { image: "url('cards/7S.png')", value: 7 },
    { image: "url('cards/8C.png')", value: 8 },
    { image: "url('cards/8D.png')", value: 8 },
    { image: "url('cards/8H.png')", value: 8 },
    { image: "url('cards/8S.png')", value: 8 },
    { image: "url('cards/9C.png')", value: 9 },
    { image: "url('cards/9D.png')", value: 9 },
    { image: "url('cards/9H.png')", value: 9 },
    { image: "url('cards/9S.png')", value: 9 },
    { image: "url('cards/10C.png')", value: 10 },
    { image: "url('cards/10D.png')", value: 10 },
    { image: "url('cards/10H.png')", value: 10 },
    { image: "url('cards/10S.png')", value: 10 },
    { image: "url('cards/JC.png')", value: 10 },
    { image: "url('cards/JD.png')", value: 10 },
    { image: "url('cards/JH.png')", value: 10 },
    { image: "url('cards/JS.png')", value: 10 },
    { image: "url('cards/QC.png')", value: 10 },
    { image: "url('cards/QD.png')", value: 10 },
    { image: "url('cards/QH.png')", value: 10 },
    { image: "url('cards/QS.png')", value: 10 },
    { image: "url('cards/KC.png')", value: 10 },
    { image: "url('cards/KD.png')", value: 10 },
    { image: "url('cards/KH.png')", value: 10 },
    { image: "url('cards/KS.png')", value: 10 },
    { image: "url('cards/AC.png')", value: 11 },
    { image: "url('cards/AD.png')", value: 11 },
    { image: "url('cards/AH.png')", value: 11 },
    { image: "url('cards/AS.png')", value: 11 },
]
let dealer1 = document.getElementById("card1");
let dealer2 = document.getElementById("card2");
let player1 = document.getElementById("card3");
let player2 = document.getElementById("card4");
let dealer3 = document.getElementById("card5");
let dealer4 = document.getElementById("card6");
let player3 = document.getElementById("card7");
let player4 = document.getElementById("card8");
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
let deckOfCards = document.getElementById("deck")
let hit = document.getElementById("hit")
let stand = document.getElementById("stand")
let card = "url('cards/red_back.png')"
let playerCount = 0;
let dealerCount = 0;
let rand = null;
let isPlaying = false;
let betReady = false;
let playerHit = false;
let hitLimit = false;
let dealerHit = false;
let dealerHitLimit = false;
let playerAce = false;
let dealerAce = false;
let revealedCard = false;

function resetGame(){
    isPlaying = false;
    betReady = false;
    playerCount = 0;
    dealerCount = 0;
    rand = null;
    playerHit = false;
    hitLimit = false;
    dealerHit = false;
    dealerHitLimit = false;
    playerAce = false;
    dealerAce = false;
    activeBet = 0;
    bet.innerHTML = activeBet
    credit = 1000;
    balance.innerHTML = credit
    revealedCard = false
    dealer1.style.backgroundImage = null;
    dealer2.style.backgroundImage = null;
    dealer3.style.backgroundImage = null;
    dealer4.style.backgroundImage = null;
    player1.style.backgroundImage = null;
    player2.style.backgroundImage = null;
    player3.style.backgroundImage = null;
    player4.style.backgroundImage = null;
}
function randNum() {
    rand = Math.floor(Math.random() * 52)
}
function setBoard() {
    playerCount = 0;
    dealerCount = 0;
    rand = null;
    playerHit = false;
    hitLimit = false;
    dealerHit = false;
    dealerHitLimit = false;
    playerAce = false;
    dealerAce = false;
    activeBet = 0;
    betReady = true;
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
function setCards() {
    setTimeout(function () {
        randNum()
        dealer1.style.backgroundImage = deck[rand].image
        dealerCount = dealerCount + deck[rand].value
        if (deck[rand].value == 11) {
            dealerAce = true;
        }
    }, 500)
    setTimeout(function () {
        randNum()
        player1.style.backgroundImage = deck[rand].image
        playerCount = playerCount + deck[rand].value
        if (deck[rand].value == 11) {
            playerAce = true;
        }
    }, 1000)
    setTimeout(function () {
        randNum()
        player2.style.backgroundImage = deck[rand].image
        playerCount = playerCount + deck[rand].value
        if (deck[rand].value == 11) {
            playerAce = true;
        }
        if(playerCount > 21 && playerAce){
            playerCount = playerCount - 10
            playerAce = false;
        }
    }, 1500)
}
function startGame() {
    if(!isPlaying){
        setBoard()
        isPlaying = true;
    }
}
function playerLoss(){
    activeBet = 0
    bet.innerHTML = activeBet
}
function playerWin(){
    credit = credit + (2 * activeBet);
    balance.innerHTML = credit;
}
function blackjack(){
    credit = credit + (Math.floor((3 * activeBet)/2) + activeBet);
    balance.innerHTML = credit;
}
function setBet(x) {
    activeBet = Number(activeBet) + x;
    bet.innerHTML = activeBet
    credit = Number(credit) - x;
    balance.innerHTML = credit;
}
function hitPlayer(){
    if(!playerHit && !hitLimit){
        randNum()
        player3.style.backgroundImage = deck[rand].image
        playerCount = playerCount + deck[rand].value
        if (deck[rand].value == 11) {
            playerAce = true;
        }
        if(playerCount > 21 && playerAce){
            playerCount = playerCount - 10
            playerAce = false;
        }else if (playerCount > 21){
            playerLoss()
        }else if (playerCount == 21){
            blackjack()
        }
        playerHit = true;
    }else if(playerHit && !hitLimit){
        randNum()
        player4.style.backgroundImage = deck[rand].image
        playerCount = playerCount + deck[rand].value
        if (deck[rand].value == 11) {
            playerAce = true;
        }
        if(playerCount > 21 && playerAce){
            playerCount = playerCount - 10
            playerAce = false;
        }else if (playerCount > 21){
            playerLoss()
        }else if (playerCount == 21){
            blackjack()
        }
        hitLimit = true;
        playerHit = false;
    }
}
function hitDealer(){
    if(!dealerHit && !dealerHitLimit){
        randNum()
        dealer3.style.backgroundImage = deck[rand].image
        dealerCount = dealerCount + deck[rand].value
        if (deck[rand].value == 11) {
            dealerAce = true;
        }
        if(dealerCount > 21 && dealerAce){
            dealerCount = dealerCount - 10
            dealerAce = false;
        }else if(dealerCount > 21){
            playerWin()
        }
        dealerHit = true;
    } else if(dealerHit && !dealerHitLimit){
        randNum()
        dealer4.style.backgroundImage = deck[rand].image
        dealerCount = dealerCount + deck[rand].value
        if (deck[rand].value == 11) {
            dealerAce = true;
        }
        if(dealerCount > 21 && dealerAce){
            dealerCount = dealerCount - 10
            dealerAce = false;
        }else if(dealerCount > 21){
            playerWin()
        }
        dealerHit = false;
        dealerHitLimit = true;
    }
}
function revealDealer(){
    randNum()
    dealer2.style.backgroundImage = deck[rand].image
        dealerCount = dealerCount + deck[rand].value
        if (deck[rand].value == 11) {
            dealerAce = true;
        }
        if(dealerCount > 21 && dealerAce){
            dealerCount = dealerCount - 10
            dealerAce = false;
        }
}

function status(){
    
}


start.onclick = function () {
    if (!isPlaying) {
        startGame()
    }
}
reset.onclick = function () {
    resetGame()
}
chip10.onclick = function () {
    if (betReady && credit - 10 >= 0) {
        setBet(10);
    }
}
chip20.onclick = function () {
    if (betReady && credit - 20 >= 0) {
        setBet(20);
    }
}
chip50.onclick = function () {
    if (betReady && credit - 50 >= 0) {
        setBet(50);
    }
}
chip100.onclick = function () {
    if (betReady && credit - 100 >= 0) {
        setBet(100);
    }
}
deckOfCards.onclick = function () {
    if (isPlaying && betReady) {
        setCards()
        betReady = false;
    }

}
hit.onclick = function () {
    if (isPlaying && !betReady) {
        hitPlayer()
    }
}
stand.onclick = function () {
    if (isPlaying && !betReady && !revealedCard){
        revealDealer()
        revealedCard = true
        if(dealerCount < 17){
            while(dealerCount < 17){
                hitDealer()
            }
        }
    }
}