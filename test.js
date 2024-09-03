const urlSearchParams = new URLSearchParams(window.location.search);
const category = urlSearchParams.get("category");

// Category arrays
const sportsCategory = [
  {
    word: "LIVERPOOL FC",
    hint: "EPL Team",
  },
  {
    word: "LOS ANGELES LAKERS",
    hint: "",
  },
  {
    word: "BUFFALO BILLS",
    hint: "",
  },
  {
    word: "JURGEN KLOPP",
    hint: "",
  },
  {
    word: "UEFA CHAMPIONS LEAGUE",
    hint: "",
  },
  {
    word: "PHIL JACKSON",
    hint: "",
  },
  {
    word: "EL FENOMENO",
    hint: "",
  },
  {
    word: "KOBE BRYANT",
    hint: "",
  },
  {
    word: "VIRGIL VAN DIJK",
    hint: "",
  },
  {
    word: "PREMIER LEAGUE",
    hint: "",
  },
  {
    word: "FIFA WORLD CUP",
    hint: "",
  },
  {
    word: "NBA FINALS",
    hint: "",
  },
  {
    word: "SUPERBOWL",
    hint: "",
  },
  {
    word: "GOAL",
    hint: "",
  },
  {
    word: "OFFSIDE",
    hint: "",
  },
  {
    word: "TOUCHDOWN",
    hint: "",
  },
  {
    word: "FOOTBALL",
    hint: "",
  },
  {
    word: "SOCCER",
    hint: "",
  },
  {
    word: "AMERICAN FOOTBALL",
    hint: "",
  },
  {
    word: "BASKETBALL",
    hint: "",
  },
  {
    word: "THIAGO ALCANTARA",
    hint: "",
  },
  {
    word: "Roberto Firmino",
    hint: "",
  },
  {
    word: "Alisson Becker",
    hint: "",
  },
  {
    word: "Jordan Henderson",
    hint: "",
  },
  {
    word: "Mohamed Salah",
    hint: "Liverpool Top Attacker",
  },
];
sportsCategory.toString().split(" ").join("").split(",");

const sportsHint = [
  "NBA Team",
  "NFL Team",
  "German Manager",
  "European League",
  "NBA Manager",
  "Football Legend",
  "Black Mamba",
  "Liverpool Defender",
  "English League",
  "Football Competition",
  "NBA Champions",
  "NFL Champions",
  "18 yard box",
  "Endzone",
  "European Sport",
  "American name for sport",
  "NFL",
  "NBA",
  "Liverpool Midfielder",
  "Liverpool Forward",
  "Liverpool Goalkeeper",
  "Liverpool Captain",
];

const moviesCategory = [
  "RESERVIOR DOGS",
  "QUENTIN TARANTINO",
  "THE HATEFUL EIGHT",
  "KILL BILL VOL ONE",
  "KILL BILL VOL TWO",
  "DJANGO UNCHAINED",
  "INGLORIOUS BASTARDS",
  "AVATAR",
  "THE DARK KNIGHT TRIOLOGY",
  "MARVELS CINEMATIC UNIVERSE",
  "DETECTIVE COMICS EXTENDED UNIVERSE",
];
moviesCategory.toString().split(" ").join("").split(",");

const moviesHint = [
  "Colors, Bank Robbers",
  "Movie Director",
  "8 Bounty Hunters",
  "Bill dies",
  "Bill dies again",
  "Slave saves his wife",
  "Nazis, Brad Pitt",
  "Way of the water",
  "A Superhero triology",
  "Not the DCEU",
  "Not the MCU",
];

const gamesCategory = [
  "RAINBOW SIX SIEGE",
  "VALORANT",
  "GRAND THEFT AUTO FIVE",
  "THE WITCHER THREE",
  "CONAN EXILES",
  "NEW WORLD",
  "LEAGUE OF LEGENDS",
  "FORTNITE",
  "BORDERLANDS THREE",
  "HALO INFINITE",
  "LOST ARK",
  "CALL OF DUTY",
  "APEX LEGENDS",
  "RED DEAD REDEMPTION TWO",
  "DARK SOULS",
  "GHOST OF TSHUSHIMA",
  "ELDEN RING",
  "STAR WARS KNIGHTS OF THE OLD REPUBLIC",
  "SEKIRO",
];
gamesCategory.toString().split(" ").join("").split(",");

const gamesHint = [
  "Ubisoft",
  "Riot Games FPS",
  "Steals vehicles",
  "Fights monsters",
  "Excommunicated",
  "Amazon Games",
  "Riot Games MMO",
  "Epic Games BR",
  "Game with 3 borders",
  "Master Chief",
  "Korean MMO",
  "Captain Price",
  "Riot Games BR",
  "Wild, Wild, West",
  "Night Breaths",
  "Mongols & Japan",
  "Harsh game",
  "Darth Revan",
  "Japanese Dark Souls",
];

const countriesCategory = [
  "UNITED STATES OF AMERICA",
  "SUDAN",
  "EGYPT",
  "NORWAY",
  "UNITED KINGDOM",
  "UNITED ARAB EMIRATES",
  "CANADA",
  "MEXICO",
  "PALESTINE",
  "KENYA",
  "SYRIA",
  "TURKEY",
  "SWEDEN",
  "DENMARK",
  "SPAIN",
  "BRAZIL",
  "URUGUAY",
  "PARAGUAY",
  "PORTUGAL",
  "BOLIVIA",
  "COLOMBIA",
  "PANAMA",
  "YEMEN",
  "CAMEROON",
  "KUWAIT",
  "CONGO",
  "MOROCCO",
  "ALGERIA",
  "LIBYA",
  "TUNISIA",
  "ITALY",
  "SWITZERLAND",
  "JAPAN",
  "AUSTRALIA",
  "INDONESIA",
  "MALAYSIA",
  "CAMBODIA",
  "TAIWAN",
  "PAKISTAN",
  "NEPAL",
  "SOUTH KOREA",
  "INDIA",
  "UGANDA",
  "BANGLADESH",
  "NIGERIA",
  "ZIMBABWE",
  "MADAGASCAR",
  "TANZANIA",
  "SENEGAL",
  "GHANA",
  "GAMBIA",
  "GABON",
  "NIGER",
  "MAURITANIA",
  "CHAD",
  "TRINIDAD AND TOBAGO",
  "JAMAICA",
  "GERMANY",
  "NETHERLANDS",
  "BELGIUM",
  "SLOVAKIA",
  "UKRAINE",
  "RUSSIA",
  "POLAND",
  "UZBEKISTAN",
  "CZECH REPUBLIC",
  "CROATIA",
  "LITHUANIA",
  "ESTONIA",
  "SLOVANIA",
  "LATVIA",
  "LAOS",
  "PHILLIPINES",
  "THAILAND",
  "VIETNAM",
  "CUBA",
  "HONDURAS",
  "ARGENTINA",
  "EL SALVADOR",
  "CHILE",
  "PERU",
  "VENEZUELA",
  "LEBANON",
];
countriesCategory.toString().split(" ").join("").split(",");

//*----THIS CODE BELOW IS GOOD ----*
// Brings up the category the player selected
let currentCategory;
switch (category) {
  case "games":
    currentCategory = gamesCategory;
    break;
  case "sports":
    currentCategory = sportsCategory;
    break;
  case "movies":
    currentCategory = moviesCategory;
    break;
  case "countries":
    currentCategory = countriesCategory;
    break;
  default:
    alert(`You must select a category to play`);
  // location.assign('/')
}

//*----THIS CODE BELOW IS GOOD ----*
const currentWord =
  currentCategory[Math.floor(Math.random() * currentCategory.length)].word;
console.log(currentWord);

const currentHint =
  currentCategory[Math.floor(Math.random() * currentCategory.length)].hint;
console.log(currentHint);

//*----THIS CODE BELOW IS GOOD ----*
const wordContainer = document.querySelector(".word-container");

//*----THIS CODE BELOW IS GOOD ----*
// Rendering the lines under the chosen word's letters
currentWord.split("").forEach((letter) => {
  let letterContainer = document.createElement("div");
  let letterPlaceholder = document.createElement("div");
  let underScorePlaceholder = document.createElement("div");

  letterContainer.className = "letter-container";
  letterPlaceholder.className = "letter-placeholder";
  underScorePlaceholder.className = "underscore-placeholder";

  //Attaches letter
  letterContainer.appendChild(letterPlaceholder);

  // Attachs letter placeholder
  letterContainer.appendChild(underScorePlaceholder);

  // Every letter to be hidden by default *COMPLETELY* Hidden through CSS class '.letter-placeholder'
  letterPlaceholder.textContent = letter;

  // Makes the underscore placeholder of a space into transparent
  if (letter === " ") {
    underScorePlaceholder.style.backgroundColor = "transparent";
  }

  // Displays the underscore & transparent letter on the browser
  wordContainer.appendChild(letterContainer);
});

//*----THIS CODE BELOW IS GOOD ----*
// Amount of starting guesses
let numGuess = 6;

// Displays the guess count
let guesses = document.querySelector(".num-guess");
guesses.textContent = numGuess;

//Game Results
let wonGame = `WINNER!`;
let lostGame = currentWord;

// Game status
let statusText = document.querySelector("h1");

// Body parts for the hangman figure
let head = document.querySelector(".hangman-head");
let body = document.querySelector(".hangman-body");
let leftArm = document.querySelector(".hangman-left-arm");
let rightArm = document.querySelector(".hangman-right-arm");
let leftLeg = document.querySelector(".hangman-left-leg");
let rightLeg = document.querySelector(".hangman-right-leg");

// Hangman body parts array
const bodyParts = [head, body, leftArm, rightArm, leftLeg, rightLeg];

// Child Nodes for the letters leading to the word
const checkWord = wordContainer.childNodes;

//*----THIS CODE BELOW IS GOOD ----*
// Targets the value for the button rows of the keyboard
const topRowDiv = document.querySelector(".top-row-keyboard");
const midRowDiv = document.querySelector(".mid-row-keyboard");
const bottomRowDiv = document.querySelector(".bottom-row-keyboard");

// An array of the 3 button rows
const buttonList = [
  ...topRowDiv.childNodes,
  ...midRowDiv.childNodes,
  ...bottomRowDiv.childNodes,
];

// Verifies letter & disables button after clicked on
buttonList.forEach((btn) => {
  btn.addEventListener("click", () => {
    checkLetter(btn.textContent);
    btn.setAttribute("disabled", true);
  });
});

window.addEventListener("keydown", (e) => {
  const pressedBtn = buttonList.find(
    (btn) => btn.textContent.toUpperCase() === e.key.toUpperCase()
  );
  // console.log(pressedBtn);
  if (pressedBtn) {
    pressedBtn.setAttribute("disabled", true);
    checkLetter(e.key.toUpperCase());
  }

  // console.log(e.key);
});

//*----THIS CODE BELOW IS GOOD ----*
// Checks letter, if incorrect guess score lowers
let checkLetter = function (letter) {
  if (!currentWord.includes(letter)) {
    numGuess--;
    guesses.textContent = numGuess;

    bodyParts[numGuess].style.visibility = "visible";

    if (!numGuess) {
      statusText.textContent = `${lostGame}`;

      buttonList.forEach((btn) => {
        if (btn.setAttribute) {
          btn.setAttribute("disabled", true);
        }
      });
    }
  }

  //*----THIS CODE BELOW IS GOOD ----*
  // If the letter is included in the word, then make letter visible
  if (currentWord.includes(letter)) {
    // Shows correct letter on the board
    wordContainer.childNodes.forEach((node) => {
      if (node.firstChild.textContent === letter) {
        node.firstChild.style.visibility = "visible";
      }
    });
  }

  //*----THIS CODE BELOW IS GOOD ----*
  // Checks if the word is complete
  const isComplete = Array.from(wordContainer.childNodes).every((node) => {
    if (
      node.firstChild.style.visibility === "visible" ||
      node.textContent === " "
    ) {
      return true;
    }
  });

  // Returns winning statement and disables buttons
  if (isComplete) {
    statusText.textContent = wonGame;

    buttonList.forEach((btn) => {
      if (btn.setAttribute) {
        btn.setAttribute("disabled", true);
      }
    });
  }
};
