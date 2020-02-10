class RockPaperScissors{
    message:string;
    userScore:any=0;
    compScore: any=0;

    compareScores(choice1:string, choice2:string) {
        if(choice1 === choice2) {
            this.message= "It's a tie!";
        }
        if(choice1 === "rock") {
            if(choice2 === "scissors") { 
                this.message= "Rock breaks Scissors. You win!";
                this.userScore++; 
                this.updateScore();  
            } 
            else {
                this.message= "Paper covers Rock. You lose!";
                this.compScore++;
                this.updateScore();
            }
        }

        else if(choice1 === "paper") {
            if(choice2 === "rock") {
                this.message= "Paper covers Rock. You win!";
                this.userScore++;
                this.updateScore();
            } 
            else if(choice2 === "scissors") {
                this.message= "Scissors cut Paper. You lose!";
                this.compScore++;
                this.updateScore();
            }
        }
        else if(choice1 === "scissors") {
            if(choice2 === "rock") {
                this.message= "Rock breaks Scissors. You lose!";
                this.compScore++;
                this.updateScore();    
            } 
            else if(choice2 === "paper") {
                this.message= "Scissors cut Paper. You win!";
                this.userScore++;
                this.updateScore();
            }
        }
        //updateScore();
    
    }
    compInput(user){
        console.log(user);
        let comp:any = Math.floor(Math.random() * 3);
        if (comp=== 0) 
            comp= "rock";
        else if (comp=== 1) 
            comp= "paper";
        else if (comp=== 2) 
            comp= "scissors";
                    
        this.compareScores(user,comp);
    }
    updateScore(){
        let usr=document.getElementById("userScore");
        let computer=document.getElementById("compScore");
        let msg=document.querySelector(".result p");
        // @ts-ignore
        usr.textContent = this.userScore;
        // @ts-ignore
        computer.textContent = this.compScore;
        // @ts-ignore
        msg.textContent = this.message;
    }
}               
                



window.onload= ()=>{
    let obj= new RockPaperScissors();
    
    let rock=document.querySelector("#r");
    let paper=document.querySelector("#p");
    let scissors=document.querySelector("#s");
    console.log(rock);
    rock.addEventListener("click",()=>{ obj.compInput("rock");})
    paper.addEventListener("click",()=>{ obj.compInput("paper");})
    scissors.addEventListener("click",()=>{ obj.compInput("scissors");})
   
}




