let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const drawGame = () =>{
    console.log("game was draw.");
    msg.innerText="Game Draw! Play Again";
    

}

const showWinner = (userWin) =>{
    if(userWin){
        console.log("You Win!");
        //msg.innerText="You win!";
        msg.style.backgroundColor ="green";
        msg.innerText=`You win! Your${choiceId} beats ${compChoice}`;
    }else{
        console.log("You Loose!");
        msg.innerText ="You Loose!";
        msg.style.backgroundColor ="red";

    }
}

// This was all about users choice 
const playGame = (choiceId)=>{
    console.log("choice was clicked",choiceId);
    const compChoice = gencompChoice();
    console.log("comp choice",compChoice);

    if(choiceId === compChoice){
        //Draw Game
        drawGame();
    }else{
        let userWin = true;
        if(choiceId==="rock"){
            //scissors, paper
            userWin = compChoice === "paper"?false:true;
        }else if (choiceId === "paper") {
            //rock, scissor
            compChoice === "scissor" ? false : true;
        }else{
            //rock,paper
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin);
    }


};

choices.forEach((choice)=>{ // these are for the choices for the user , we are diving al of our work in small functions this is called modular way of programming
    console.log(choice);
    choice.addEventListener("click",()=>{
        const choiceId = choice.getAttribute("Id");
        playGame(choiceId);
    });
});

//Now all about computers choice
const gencompChoice= () => {
    const options =["rock","paper","scissor"];// before generating the chices for comp we store them in array
    const ranIdx = Math.floor(Math.random()*3);//in js we can generate random no.s btw 0 and 1 so multiply it with 3 so rndom
    // no. will generate between 0 to 2 which we will treat as the index of the array we created nad used floor to convert value into floor as js generate values in decimal
    return options[ranIdx];

} 