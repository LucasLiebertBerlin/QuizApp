let questions = [
  {
    question: "Wer hat HTML erfunden?",
    answer_1: "Robbie Williams",
    answer_2: "Lady Gaga",
    answer_3: "Tim Berners-Lee",
    answer_4: "Justin Bieber",
    right_answer: 3,
  },
  {
    question: "Was ist die Hauptstadt von Frankreich?",
    answer_1: "Berlin",
    answer_2: "Madrid",
    answer_3: "London",
    answer_4: "Paris",
    right_answer: 4,
  },
  {
    question: "Wer hat die Relativitätstheorie entwickelt?",
    answer_1: "Isaac Newton",
    answer_2: "Albert Einstein",
    answer_3: "Galileo Galilei",
    answer_4: "Stephen Hawking",
    right_answer: 2,
  },
  {
    question: "Was ist die chemische Formel für Wasser?",
    answer_1: "H2O2",
    answer_2: "CO2",
    answer_3: "H2O",
    answer_4: "O2",
    right_answer: 3,
  },
  {
    question: "Welche Farbe hat eine reife Banane?",
    answer_1: "Grün",
    answer_2: "Rot",
    answer_3: "Gelb",
    answer_4: "Blau",
    right_answer: 3,
  },
];

let currentQuestion = 0;

function init() {
  document.getElementById("all-questions").innerHTML = questions.length;
  showQuestion();
}

function showQuestion(newQuestion) {
    if (currentQuestion >= questions.length ) {
        // TODO: Show and screen
    } else {
        let question = questions[currentQuestion];
    }


  document.getElementById('question-number').innerHTML = currentQuestion + 1;
  document.getElementById("questionText").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];

}
function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1); // erhältst du den letzten Buchstaben des Strings.

  let idOfRightAnswer = `answer_${question["right_answer"]}`;

  if (selectedQuestionNumber == question["right_answer"]) {
    console.log("Richtige Antwort!!");
    document.getElementById(selection).parentNode.classList.add("bg-success"); // parentNode ist das übergeordnete element
  } else {
    console.log("Falsche Antwort!");
    document.getElementById(selection).parentNode.classList.add("bg-danger"); // parentNode ist das übergeordnete element
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success"); // parentNode ist das übergeordnete element
  }
  document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
  currentQuestion++; // zb von 0 auf 1
  showQuestion();
  document.getElementById("next-button").disabled = true;
  resetAnswerButtons();
  showQuestion();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}