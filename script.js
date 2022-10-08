// Read user input (Rock Paper Scissors)
// Select one random option from the list [Rock Paper Scissors] for the computer.
// Compare user input vs computer input
//let userInput = prompt('Select your option, Rock, Papers or Scissors');
let computerInput = ['Rock', 'Paper', 'Scissors'];
let Score = { Computer: 0, User: 0 };
let lblResults = document.querySelector('#results');
let userScore = document.querySelector('#User');
let computerScore = document.querySelector('#Computer');



let getRandom = () => computerInput[Math.floor(Math.random() * computerInput.length)];

function validateScore(userWin) {
    if (userWin) {
        Score.User += 1
        userScore.textContent = Score.User;
        if (Score.User === 5) { lblResults.textContent = "User wins!"; restartScore(); }
    }
    else {
        Score.Computer += 1
        computerScore.textContent = Score.Computer;
        if (Score.Computer === 5) { lblResults.textContent = "Computer wins!"; restartScore(); }
    }
    null;
}

let restartScore = () => {
    Score.Computer = 0;
    Score.User = 0;
    userScore.textContent = Score.User
    computerScore.textContent = Score.Computer;

}

let results = (userInput) => {

    createImg("user", userInput.toLowerCase());

    let computerInput = getRandom();
    createImg("computer", computerInput.toLowerCase());


    let matchResults;
    // console.log(computerInput);
    if (userInput == computerInput) {
        lblResults.textContent = ('Draw ' + "User choose : " + userInput + " Computer choose: " + computerInput);
    }
    else if ((userInput == "Rock" && computerInput == "Paper") || (userInput == "Scissors" && computerInput == "Rock") || (userInput == "Paper" && computerInput == "Scissors")) {
        lblResults.textContent = 'User lose ' + "User choose : " + userInput + " Computer choose: " + computerInput;
        matchResults = validateScore(false);
        if (!matchResults) { console.log(matchResults) } /*else { lblResults.textContent = 'User lose ' + "User choose : " + userInput + " Computer choose: " + computerInput; }*/;

    }
    else if ((userInput == "Rock" && computerInput == "Scissors") || (userInput == "Paper" && computerInput == "Rock") || (userInput == "Scissors" && computerInput == "Paper")) {
        lblResults.textContent = 'User wins ' + "User choose : " + userInput + " Computer choose: " + computerInput 
        matchResults = validateScore(true);
        if (!matchResults) { console.log(matchResults) } /*else { */};

    // }
    //alert(results());

};


function createButtons() {
    const buttons = document.querySelector('.buttons');
    computerInput.forEach(element => {
        const button = document.createElement('button');
        button.textContent = element;
        button.classList.add(element);
        button.type = "button";
        button.setAttribute("data-key", element);
        button.addEventListener('click', function () { results(element) });
        // button.addEventListener('click',function(){results(Klk)});
        buttons.appendChild(button);
    });
}

function createImg(forWho, element) {
    removeImg(forWho);
    const images = document.querySelector('#' + forWho);
    const image = document.createElement('img');
    image.src = `https://www.rock-paper-scissors-game.com/i/${element}.png`;
    image.title = "img";
    image.id = forWho + "-choice";
    // image.classList.add('hide');
    image.setAttribute("data-key-img", "image-choice");
    // button.addEventListener('click', function () { results(element) });
    // button.addEventListener('click',function(){results(Klk)});
    images.appendChild(image);
}

function removeImg(forWho) {
    // const images = document.querySelector('#'+forWho);
    const img = document.querySelector("#" + forWho + "-choice");
    img.remove();

}

createButtons();



