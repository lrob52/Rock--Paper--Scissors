document.querySelectorAll('button').forEach(button => {
    button.addEventListener("mouseover", () => {
        button.style.boxShadow = "0 0 25px hotpink";
    });
    button.addEventListener("mouseout", () => {
        button.style.boxShadow = "none";
    });
});


//Let's Play!

const choices = ["rock", "paper", "scissors"];

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const userChoice = button.id;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const countdown = (count) => {
        document.getElementById('winner', 'timer').innerText = `${count}`;
        if (count === 0) {
            document.getElementById('winner','timer').innerText = "User Choice: ${userChoice}, Computer Choice: ${computerChoice}";
           
            determineWinner(userChoice, computerChoice);
        } else {
            setTimeout(() => countdown(count - 1), 1000);
        }
    };

    countdown(3);
  });
});

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        document.getElementById('winner').innerText = "Great minds think alike!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        document.getElementById('winner').innerText = "I knew you'd win!";
        document.getElementById('winner').classList.add(`${userChoice}-win`);
    } else {
        document.getElementById('winner').innerText = "Computer wins! Better luck next time.";
        document.getElementById('winner').classList.add(`${computerChoice}-win`);
    }
};