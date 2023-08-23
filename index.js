const computerChoice = document.getElementById("computer-choice");
const yourChoice = document.getElementById("your-choice");
const displayResult = document.getElementById("display-result");

const arr = ["rock", "paper", "sccissor"];
const conditions = {
  rock: {
    profile: "rock",
    win: "sccissor",
    lose: "paper",
    draw: "rock",
  },
  paper: {
    profile: "paper",
    win: "rock",
    lose: "sccissor",
    draw: "paper",
  },
  sccissor: {
    profile: "sccissor",
    win: "paper",
    lose: "rock",
    draw: "sccissor",
  },
};
document.querySelectorAll("button").forEach((getButton) =>
  getButton.addEventListener("click", (e) => {
    let randomNum = arr[Math.floor(Math.random() * 3)];
    computerChoice.innerHTML = randomNum;
    yourChoice.innerHTML = e.target.id;
    if (conditions[randomNum].draw === conditions[e.target.id].draw) {
      displayResult.innerHTML = "it is a draw";
    } else if (conditions[randomNum].win === conditions[e.target.id].profile) {
      displayResult.innerHTML = "you lose";
    } else {
      displayResult.innerHTML = "you win";
    }
  })
);
