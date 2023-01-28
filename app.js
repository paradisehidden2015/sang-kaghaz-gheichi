const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;

  const playGame = () => {
    const sangBtn = document.querySelector(".sang");
    const kaghazBtn = document.querySelector(".kaghaz");
    const ghaychiBtn = document.querySelector(".ghaychi");
    const playerOptions = [sangBtn, kaghazBtn, ghaychiBtn];
    const computerOptions = ["sang", "kaghaz", "ghaychi"];

    playerOptions.forEach((option) => {
      option.addEventListener("click", function () {
        const nextMove = document.querySelector(".nextMove");
        moves++;
        nextMove.innerText = `تعداد انتخاب: ${10 - moves}`;

        const choiceNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[choiceNumber];

        winner(this.innerText, computerChoice);

        if (moves == 10) {
          gameOver(playerOptions, nextMove);
        }
      });
    });
  };

  const winner = (player, computer) => {
    const result = document.querySelector(".result");
    const playerScoreBoard = document.querySelector(".p-count");
    const computerScoreBoard = document.querySelector(".c-count");
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if (player === computer) {
      result.textContent = "مساوی";
    } else if (player == "sang") {
      if (computer == "kaghaz") {
        result.textContent = "برنده کامپیوتر";
        computerScore++;
        computerScoreBoard.textContent = computerScore;
      } else {
        result.textContent = "برنده کاربر";
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    } else if (player == "ghaychi") {
      if (computer == "sang") {
        result.textContent = "برنده کامپیوتر";
        computerScore++;
        computerScoreBoard.textContent = computerScore;
      } else {
        result.textContent = "برنده کاربر";
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    } else if (player == "kaghaz") {
      if (computer == "ghaychi") {
        result.textContent = "برنده کامپیوتر";
        computerScore++;
        computerScoreBoard.textContent = computerScore;
      } else {
        result.textContent = "برنده کاربر";
        playerScore++;
        playerScoreBoard.textContent = playerScore;
      }
    }
  };

  const gameOver = (playerOptions, nextMove) => {
    const chooseMove = document.querySelector(".move");
    const result = document.querySelector(".result");
    const reloadBtn = document.querySelector(".reload");

    playerOptions.forEach((option) => {
      option.style.display = "none";
    });

    chooseMove.innerText = "اتمام بازی";
    nextMove.style.display = "none";

    if (playerScore > computerScore) {
      result.style.fontSize = "2rem";
      result.innerText = "شما برنده شدید";
      result.style.color = "#308D46";
    } else if (playerScore < computerScore) {
      result.style.fontSize = "2rem";
      result.innerText = "شما بازی را باختید";
      result.style.color = "#5a0000";
    } else {
      result.style.fontSize = "2rem";
      result.innerText = "مساوی";
      result.style.color = "grey";
    }
    reloadBtn.style.display = "flex";
    reloadBtn.addEventListener("click", () => {
      window.location.reload();
    });
  };

  playGame();
};

game();
