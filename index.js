// initializing variables
let score = 0
let message = ""
let cards = [randomCard(), randomCard()]
let sum = 0
let credits = 500

// making JS objects
let scoreEl = document.getElementById("score-el")
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let creditsEl = document.getElementById("credits-el")

// random card generator
function randomCard() {
    let randomNumber = Math.ceil( Math.random()*13 )
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

// game displayer
function playGame() {
    
    // displaying cards
    cardsEl.textContent = "Cards: "
    sum = 0
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
        sum += cards[i]
    }
    // displaying score, sum, and credits
    scoreEl.textContent = "Score: " + score
    sumEl.textContent = "Sum: " + sum
    creditsEl.textContent = "Credits: $" + credits
    
    //core game logic
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Blackjack! +$100 Reward"
        credits += 100
        score += 1
        scoreEl.textContent = "Score: " + score
    } else {
        message = "Give it another shot!"
        cards = [randomCard()]
        sum = 0
    }
    messageEl.textContent = message
    
}

// draw functionality
function draw() {
    if (credits>=20) {
        let card = randomCard()
        sum += card
        cards.push(card)
        credits -= 20
        creditsEl.textContent = "Credits: $" + credits
        playGame()       
    }
}

// pass functionality
function pass() {
    if (credits>=10) {
        credits -= 5
        creditsEl.textContent = "Credits: $" + credits
    }
}

playGame()