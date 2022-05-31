const game = {
    title: 'Guess the Number!',
    biggestNum: 100, 
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [], 
    play: function() {
      
      this.secretNum = Math.floor(Math.random() *
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
console.log(this.secretNum)


    
        do {
            this.prevGuesses.push(this.getGeuss())
            this.render()
        }while (this.prevGuesses[this.prevGuesses.length - 1] !==
            this.secretNum)
        },
        getGeuss: function() {
            let guess
        do {
            guess = parseInt(prompt(`enter a guess between ${this.smallestNum}
            and ${this.biggestNum}`,''))
            } while (guess < this.smallestNum || guess > this.biggestNum
            || guess === NaN)
            return guess
    }, 
    render: function() { 
        if (this.prevGuesses[this.prevGuesses.length - 1] === this.secretNum) {
            alert(`congrats! you guessed the number in ${this.prevGuess.length} guesses!`)
        } else if (this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum) {
            alert(`your guess is too high previous guesses ${this.prevGuesses.join()}`)
        }else if (this.prevGuesses[this.prevGuesses.length-1] < this.secretNum) {
            alert(`your guess is too low. previous guesses: ${this.prevGuesses.join()}`)
        }
    }
}
        
    game.play()

    