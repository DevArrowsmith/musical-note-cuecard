const cardFront = document.querySelector(".card__front");
const cardBack = document.querySelector(".card__back");
const rows = document.querySelector(".row");
const clef = document.querySelector(".clef");
const note = document.querySelector(".note");

clef.textContent = "𝄞";
note.textContent = "𝅘𝅥";

const trebleNotes = [
  {
    clef: "𝄞",
    note: "E",
    set: "lower",
    position: 0,
  },
  {
    clef: "𝄞",
    note: "F",
    set: "lower",
    position: 1,
  },
  {
    clef: "𝄞",
    note: "G",
    set: "lower",
    position: 2,
  },
  {
    clef: "𝄞",
    note: "A",
    set: "lower",
    position: 3,
  },
  {
    clef: "𝄞",
    note: "B",
    set: "upper",
    position: 4,
  },
  {
    clef: "𝄞",
    note: "C",
    set: "upper",
    position: 5,
  },
  {
    clef: "𝄞",
    note: "D",
    set: "upper",
    position: 6,
  },
  {
    clef: "𝄞",
    note: "E",
    set: "upper",
    position: 7,
  },
  {
    clef: "𝄞",
    note: "F",
    set: "upper",
    position: 8,
  },
];

const bassNotes = [
  {
    clef: "𝄢",
    note: "G",
    set: "lower",
    position: 0,
  },
  {
    clef: "𝄢",
    note: "A",
    set: "lower",
    position: 1,
  },
  {
    clef: "𝄢",
    note: "B",
    set: "lower",
    position: 2,
  },
  {
    clef: "𝄢",
    note: "C",
    set: "lower",
    position: 3,
  },
  {
    clef: "𝄢",
    note: "D",
    set: "upper",
    position: 4,
  },
  {
    clef: "𝄢",
    note: "E",
    set: "upper",
    position: 5,
  },
  {
    clef: "𝄢",
    note: "F",
    set: "upper",
    position: 6,
  },
  {
    clef: "𝄢",
    note: "G",
    set: "upper",
    position: 7,
  },
  {
    clef: "𝄢",
    note: "A",
    set: "upper",
    position: 8,
  },
];

const notes = trebleNotes.concat(bassNotes);

let currentNotes = [...notes];

const setQuestion = () => {
  const currentNote = currentNotes.splice(
    Math.ceil(Math.random() * (currentNotes.length - 1)),
    1
  )[0];

  clef.innerHTML = currentNote.clef;

  if (currentNote.clef === "𝄞") {
    clef.style.transform = null;
    clef.style.fontSize = "124px";
  }

  if (currentNote.clef === "𝄢") {
    clef.style.transform = "translateY(2px)";
    clef.style.fontSize = "93px";
  }

  cardBack.innerHTML = currentNote.note;

  const noteTransformation =
    currentNote.set === "lower"
      ? `translateY(${-10 * currentNote.position}px)`
      : `translateY(53px) translateY(${
          -10 * currentNote.position
        }px) rotate(180deg)`;

  note.style.transform = noteTransformation;

  if (currentNotes.length === 0) {
    currentNotes = [...notes];
  }
};

setQuestion();

const clickToAnswer = () => {
  cardBack.style.transform = "rotateY(0deg)";
  cardFront.style.transform = "rotateY(180deg)";
};

const clickToQuestion = () => {
  cardBack.style.transform = "rotateY(-180deg)";
  cardFront.style.transform = null;
  setTimeout(setQuestion, 250);
};

cardFront.onclick = clickToAnswer;
cardBack.onclick = clickToQuestion;
