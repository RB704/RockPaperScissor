var RockPaperScissors = /** @class */ (function () {
    function RockPaperScissors() {
        this.userScore = 0;
        this.compScore = 0;
    }
    RockPaperScissors.prototype.compareScores = function (choice1, choice2) {
        if (choice1 === choice2) {
            this.message = "It's a tie!";
        }
        if (choice1 === "rock") {
            if (choice2 === "scissors") {
                this.message = "Rock breaks Scissors. You win!";
                this.userScore++;
            }
            else {
                this.message = "Paper covers Rock. You lose!";
                this.compScore++;
            }
        }
        else if (choice1 === "paper") {
            if (choice2 === "rock") {
                this.message = "Paper covers Rock. You win!";
                this.userScore++;
            }
            else if (choice2 === "scissors") {
                this.message = "Scissors cut Paper. You lose!";
                this.compScore++;
            }
        }
        else if (choice1 === "scissors") {
            if (choice2 === "rock") {
                this.message = "Rock breaks Scissors. You lose!";
                this.compScore++;
            }
            else if (choice2 === "paper") {
                this.message = "Scissors cut Paper. You win!";
                this.userScore++;
            }
        }
        this.updateScore();
    };
    RockPaperScissors.prototype.compInput = function (user) {
        var comp = Math.floor(Math.random() * 3);
        if (comp === 0)
            comp = "rock";
        else if (comp === 1)
            comp = "paper";
        else if (comp === 2)
            comp = "scissors";
        this.compareScores(user, comp);
    };
    RockPaperScissors.prototype.updateScore = function () {
        var usr = document.getElementById("userScore");
        var computer = document.getElementById("compScore");
        var msg = document.querySelector(".result p");
        // @ts-ignore
        usr.textContent = this.userScore;
        // @ts-ignore
        computer.textContent = this.compScore;
        // @ts-ignore
        msg.textContent = this.message;
    };
    return RockPaperScissors;
}());
window.onload = function () {
    var obj = new RockPaperScissors();
    var rock = document.querySelector("#r");
    var paper = document.querySelector("#p");
    var scissors = document.querySelector("#s");
    console.log(rock);
    rock.addEventListener("click", function () { obj.compInput("rock"); });
    paper.addEventListener("click", function () { obj.compInput("paper"); });
    scissors.addEventListener("click", function () { obj.compInput("scissors"); });
};
