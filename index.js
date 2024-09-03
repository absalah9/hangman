const urlSearchParams = new URLSearchParams(window.location.search);
const category = urlSearchParams.get("category");

const categories = {
  sportsCategory: [
    { word: "LIVERPOOL FC", hint: "EPL Team" },
    { word: "LOS ANGELES LAKERS", hint: "NBA Team" },
    { word: "BUFFALO BILLS", hint: "NFL Team" },
    { word: "JURGEN KLOPP", hint: "German Manager" },
    { word: "UEFA CHAMPIONS LEAGUE", hint: "European League" },
    { word: "PHIL JACKSON", hint: "NBA Manager" },
    { word: "EL FENOMENO", hint: "Football Legend" },
    { word: "KOBE BRYANT", hint: "Black Mamba" },
    { word: "VIRGIL VAN DIJK", hint: "Liverpool Defender" },
    { word: "PREMIER LEAGUE", hint: "English League" },
    { word: "FIFA WORLD CUP", hint: "Football Competition" },
    { word: "NBA FINALS", hint: "NBA Champions" },
    { word: "SUPERBOWL", hint: "NFL Champions" },
    { word: "GOAL", hint: "18 yard box" },
    { word: "OFFSIDE", hint: "Ref flag goes up" },
    { word: "TOUCHDOWN", hint: "Endzone" },
    { word: "FOOTBALL", hint: "European Sport" },
    { word: "SOCCER", hint: "American name for sport" },
    { word: "AMERICAN FOOTBALL", hint: "NFL" },
    { word: "BASKETBALL", hint: "NBA" },
    { word: "THIAGO ALCANTARA", hint: "Liverpool Midfielder" },
    { word: "ROBERTO FIRMINO", hint: "Liverpool Forward" },
    { word: "ALISSON BECKER", hint: "Liverpool Goalkeeper" },
    { word: "JORDAN HENDERSON", hint: "Liverpool Captain" },
    { word: "MOHAMED SALAH", hint: "Liverpool Top Attacker" },
  ],

  gamesCategory: [
    { word: "RAINBOW SIX SIEGE", hint: "Ubisoft" },
    { word: "VALORANT", hint: "Riot Games FPS" },
    { word: "GRAND THEFT AUTO FIVE", hint: "Steals vehicles" },
    { word: "THE WITCHER THREE", hint: "Fights monsters" },
    { word: "CONAN EXILES", hint: "Excommunicated" },
    { word: "NEW WORLD", hint: "Amazon Games" },
    { word: "LEAGUE OF LEGENDS", hint: "Riot Games MMO" },
    { word: "FORTNITE", hint: "Epic Games BR" },
    { word: "BORDERLANDS THREE", hint: "Game with 3 borders" },
    { word: "HALO INFINITE", hint: "Master Chief" },
    { word: "LOST ARK", hint: "Korean MMO" },
    { word: "CALL OF DUTY", hint: "Captain Price" },
    { word: "APEX LEGENDS", hint: "Riot Games BR" },
    { word: "RED DEAD REDEMPTION TWO", hint: "Wild, Wild, West" },
    { word: "DARK SOULS", hint: "Night Breaths" },
    { word: "GHOST OF TSHUSHIMA", hint: "Mongols & Japan" },
    { word: "ELDEN RING", hint: "Harsh game" },
    { word: "STAR WARS KNIGHTS OF THE OLD REPUBLIC", hint: "Darth Revan" },
    { word: "SEKIRO", hint: "Japanese Dark Souls" },
  ],

  moviesCategory: [
    { word: "RESERVIOR DOGS", hint: "Colors, Bank Robbers" },
    { word: "QUENTIN TARANTINO", hint: "Movie Director" },
    { word: "THE HATEFUL EIGHT", hint: "8 Bounty Hunters" },
    { word: "KILL BILL VOL ONE", hint: "Bill dies" },
    { word: "KILL BILL VOL TWO", hint: "Bill dies again" },
    { word: "DJANGO UNCHAINED", hint: "Slave saves his wife" },
    { word: "INGLORIOUS BASTARDS", hint: "Nazis, Brad Pitt" },
    { word: "AVATAR", hint: "Way of the water" },
    { word: "THE DARK KNIGHT TRIOLOGY", hint: "A Superhero triology" },
    { word: "MARVELS CINEMATIC UNIVERSE", hint: "Not the DCEU" },
    { word: "DETECTIVE COMICS EXTENDED UNIVERSE", hint: "Not the MCU" },
  ],

  countriesCategory: [
    { word: "UNITED STATES OF AMERICA", hint: "New York" },
    { word: "SUDAN", hint: "Khartoum" },
    { word: "EGYPT", hint: "Alexandria" },
    { word: "NORWAY", hint: "Skien" },
    { word: "UNITED KINGDOM", hint: "Liverpool" },
    { word: "UNITED ARAB EMIRATES", hint: "Abu Dhabi" },
    { word: "CANADA", hint: "Ottawa" },
    { word: "MEXICO", hint: "Tulum" },
    { word: "PALESTINE", hint: "Ramallah" },
    { word: "KENYA", hint: "Mombasa" },
    { word: "SYRIA", hint: "Damascus" },
    { word: "TURKEY", hint: "Istanbul" },
    { word: "SWEDEN", hint: "Stockholm" },
    { word: "DENMARK", hint: "Copenhagen" },
    { word: "SPAIN", hint: "Zaragoza" },
    { word: "BRAZIL", hint: "Rio" },
    { word: "URUGUAY", hint: "Montevideo" },
    { word: "PORTUGAL", hint: "Lisbon" },
    { word: "BOLIVIA", hint: "La Paz" },
    { word: "COLOMBIA", hint: "Medellin" },
    { word: "PANAMA", hint: "Panama City" },
    { word: "YEMEN", hint: "Sana'a" },
    { word: "CAMEROON", hint: "Yaoundé" },
    { word: "KUWAIT", hint: "Hawally" },
    { word: "CONGO", hint: "Kinshasa" },
    { word: "MOROCCO", hint: "Rabat" },
    { word: "ALGERIA", hint: "Algiers" },
    { word: "LIBYA", hint: "Ajdabiya" },
    { word: "TUNISIA", hint: "Kairouan" },
    { word: "ITALY", hint: "Turin" },
    { word: "SWITZERLAND", hint: "Geneva" },
    { word: "JAPAN", hint: "Kyoto" },
    { word: "AUSTRALIA", hint: "Perth" },
    { word: "INDONESIA", hint: "Jakarta" },
    { word: "CAMBODIA", hint: "Phnom Penh" },
    { word: "TAIWAN", hint: "Taipei city" },
    { word: "PAKISTAN", hint: "Lahore" },
    { word: "NEPAL", hint: "Kathmandu" },
    { word: "SOUTH KOREA", hint: "Busan" },
    { word: "INDIA", hint: "Mumbai" },
    { word: "NIGERIA", hint: "Lagos" },
    { word: "ZIMBABWE", hint: "Harare" },
    { word: "MADAGASCAR", hint: "Antananarivo" },
    { word: "TANZANIA", hint: "Dar es Salaam" },
    { word: "SENEGAL", hint: "Dakar" },
    { word: "GHANA", hint: "Kusami" },
    { word: "GABON", hint: "Libreville" },
    { word: "CHAD", hint: "N'Djamena" },
    { word: "TRINIDAD AND TOBAGO", hint: "Port of Spain" },
    { word: "JAMAICA", hint: "Kingston" },
    { word: "GERMANY", hint: "Hamburg" },
    { word: "NETHERLANDS", hint: "Amsterdam" },
    { word: "BELGIUM", hint: "Brussels" },
    { word: "UKRAINE", hint: "Kyiv" },
    { word: "RUSSIA", hint: "Moscow" },
    { word: "POLAND", hint: "Warsaw" },
    { word: "CROATIA", hint: "Zagreb" },
    { word: "PHILLIPINES", hint: "Manila" },
    { word: "THAILAND", hint: "Bangkok" },
    { word: "VIETNAM", hint: "Can Tho" },
    { word: "CUBA", hint: "Havana" },
    { word: "ARGENTINA", hint: "Buenos Aires" },
    { word: "CHILE", hint: "Santiago" },
    { word: "VENEZUELA", hint: "Caracas" },
    { word: "LEBANON", hint: "Beirut" },
  ],
};

//*----THIS CODE BELOW IS GOOD ----*
// Brings up the category the player selected
let currentCategory;
switch (category) {
  case "games":
    currentCategory = categories.gamesCategory;
    break;
  case "sports":
    currentCategory = categories.sportsCategory;
    break;
  case "movies":
    currentCategory = categories.moviesCategory;
    break;
  case "countries":
    currentCategory = categories.countriesCategory;
    break;
  default:
    alert(`You must select a category to play`);
  // location.assign('/')
}

//*----THIS CODE BELOW IS GOOD ----*
const currentItem =
  currentCategory[Math.floor(Math.random() * currentCategory.length)];

const currentWord = currentItem.word;

const currentHint = currentItem.hint;

console.log(currentItem);

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
statusText.textContent = currentHint;

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
    checkLetter(btn.textContent.toUpperCase());
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
