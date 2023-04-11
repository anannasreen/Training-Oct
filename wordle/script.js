const wordLists = document.querySelectorAll(".word-list");
const listOne = document.querySelector(".list-one");
const listTwo = document.querySelector(".list-two");
const listThree = document.querySelector(".list-three");
const listFour = document.querySelector(".list-four");

const words = [
  "AREA",
  "AQUA",
  "BABY",
  "BARK",
  "BUZZ",
  "COPY",
  "CHIP",
  "DUCK",
  "DUMB",
  "EXAM",
  "ECHO",
  "FISH",
  "FAST",
  "GOLD",
  "GANG",
  "HIGH",
  "HOLD",
  "IRIS",
  "INCH",
  "JACK",
  "JAWS",
  "KING",
  "KITE",
  "LAMP",
  "LOAN",
  "MONK",
  "MAZE",
  "NOTE",
  "NEST",
  "OVEN",
  "OATH",
  "PAST",
  "PILL",
  "QUIZ",
  "QUAD",
  "RING",
  "RUBY",
  "SONG",
  "SAND",
  "TICK",
  "TEXT",
  "UGLY",
  "UNDO",
  "VAST",
  "VIVA",
  "WALL",
  "WAVE",
  "AXIS",
  "YOLK",
  "ZEST",
];

wordLists.forEach((wordList) => {
  for (let i = 65; i <= 90; i++) {
    // console.log(String.fromCharCode(i));
    const letterBox = document.createElement("button");
    wordList.appendChild(letterBox);
    letterBox.classList.add("letter");
    letterBox.value = String.fromCharCode(i);
    letterBox.innerHTML = String.fromCharCode(i);
  }
});

const lettersOfListone = listOne.querySelectorAll(".letter");
const lettersOfListtwo = listTwo.querySelectorAll(".letter");
const lettersOfListthree = listThree.querySelectorAll(".letter");
const lettersOfListfour = listFour.querySelectorAll(".letter");

lettersOfListone.forEach((letter) => {
  letter.addEventListener("mouseenter", (e) => {
    e.target.style.backgroundColor = "#c9b458";
    for (let i = 0; i < words.length; i++) {
      if (words[i].charAt(0) === e.target.value) {
        console.log(words[i]);

        for (j = 0; j < listTwo.children.length; j++) {
          if (listTwo.children[j].value === words[i].split("")[1]) {
            listTwo.children[j].style.backgroundColor = "#c9b458";
          }
        }

        for (j = 0; j < listThree.children.length; j++) {
          if (listThree.children[j].value === words[i].split("")[2]) {
            listThree.children[j].style.backgroundColor = "#c9b458";
          }
        }

        for (j = 0; j < listFour.children.length; j++) {
          if (listFour.children[j].value === words[i].split("")[3]) {
            listFour.children[j].style.backgroundColor = "#c9b458";
          }
        }
      }
    }
  });
  letter.addEventListener("mouseleave", (e) => {
    e.target.style.backgroundColor = "#6aaa64";
    for (j = 0; j < listTwo.children.length; j++) {
      listTwo.children[j].style.backgroundColor = "#6aaa64";
    }

    for (j = 0; j < listThree.children.length; j++) {
      listThree.children[j].style.backgroundColor = "#6aaa64";
    }

    for (j = 0; j < listFour.children.length; j++) {
      listFour.children[j].style.backgroundColor = "#6aaa64";
    }
  });
});

lettersOfListtwo.forEach((letter) => {
  letter.addEventListener("mouseenter", (e) => {
    e.target.style.backgroundColor = "#c9b458";
    for (let i = 0; i < words.length; i++) {
      if (words[i].charAt(1) === e.target.value) {
        console.log(words[i]);

        for (j = 0; j < listOne.children.length; j++) {
          if (listOne.children[j].value === words[i].split("")[0]) {
            listOne.children[j].style.backgroundColor = "#c9b458";
          }
        }

        for (j = 0; j < listThree.children.length; j++) {
          if (listThree.children[j].value === words[i].split("")[2]) {
            listThree.children[j].style.backgroundColor = "#c9b458";
          }
        }

        for (j = 0; j < listFour.children.length; j++) {
          if (listFour.children[j].value === words[i].split("")[3]) {
            listFour.children[j].style.backgroundColor = "#c9b458";
          }
        }
      }
    }
  });
  letter.addEventListener("mouseleave", (e) => {
    e.target.style.backgroundColor = "#6aaa64";
    for (j = 0; j < listOne.children.length; j++) {
      listOne.children[j].style.backgroundColor = "#6aaa64";
    }

    for (j = 0; j < listThree.children.length; j++) {
      listThree.children[j].style.backgroundColor = "#6aaa64";
    }

    for (j = 0; j < listFour.children.length; j++) {
      listFour.children[j].style.backgroundColor = "#6aaa64";
    }
  });
});

lettersOfListthree.forEach((letter) => {
  letter.addEventListener("mouseenter", (e) => {
    e.target.style.backgroundColor = "#c9b458";
    for (let i = 0; i < words.length; i++) {
      if (words[i].charAt(2) === e.target.value) {
        console.log(words[i]);

        for (j = 0; j < listOne.children.length; j++) {
          if (listOne.children[j].value === words[i].split("")[0]) {
            listOne.children[j].style.backgroundColor = "#c9b458";
          }
        }

        for (j = 0; j < listTwo.children.length; j++) {
          if (listTwo.children[j].value === words[i].split("")[1]) {
            listTwo.children[j].style.backgroundColor = "#c9b458";
          }
        }

        for (j = 0; j < listFour.children.length; j++) {
          if (listFour.children[j].value === words[i].split("")[3]) {
            listFour.children[j].style.backgroundColor = "#c9b458";
          }
        }
      }
    }
  });
  letter.addEventListener("mouseleave", (e) => {
    e.target.style.backgroundColor = "#6aaa64";
    for (j = 0; j < listOne.children.length; j++) {
      listOne.children[j].style.backgroundColor = "#6aaa64";
    }

    for (j = 0; j < listTwo.children.length; j++) {
      listTwo.children[j].style.backgroundColor = "#6aaa64";
    }

    for (j = 0; j < listFour.children.length; j++) {
      listFour.children[j].style.backgroundColor = "#6aaa64";
    }
  });
});

lettersOfListfour.forEach((letter) => {
  letter.addEventListener("mouseenter", (e) => {
    e.target.style.backgroundColor = "#c9b458";
    for (let i = 0; i < words.length; i++) {
      if (words[i].charAt(3) === e.target.value) {
        console.log(words[i]);

        for (j = 0; j < listOne.children.length; j++) {
          if (listOne.children[j].value === words[i].split("")[0]) {
            listOne.children[j].style.backgroundColor = "#c9b458";
          }
        }

        for (j = 0; j < listTwo.children.length; j++) {
          if (listTwo.children[j].value === words[i].split("")[1]) {
            listTwo.children[j].style.backgroundColor = "#c9b458";
          }
        }

        for (j = 0; j < listThree.children.length; j++) {
          if (listThree.children[j].value === words[i].split("")[2]) {
            listThree.children[j].style.backgroundColor = "#c9b458";
          }
        }
      }
    }
  });
  letter.addEventListener("mouseleave", (e) => {
    e.target.style.backgroundColor = "#6aaa64";
    for (j = 0; j < listOne.children.length; j++) {
      listOne.children[j].style.backgroundColor = "#6aaa64";
    }

    for (j = 0; j < listTwo.children.length; j++) {
      listTwo.children[j].style.backgroundColor = "#6aaa64";
    }

    for (j = 0; j < listThree.children.length; j++) {
      listThree.children[j].style.backgroundColor = "#6aaa64";
    }
  });
});
