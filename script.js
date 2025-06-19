const questionText = document.getElementById('question');
const choicesText = document.getElementById('choices');
const submitBtn = document.getElementById('submit');

let questionCount = 0;
let score = 0;

const questions = [
  {
    question: 'What is the capital of France?',
    choices: ['Monaco', 'Paris', 'Ottawa'],
    answer: 1,
  },
  {
    question: 'Which country has the largest land area?',
    choices: ['Canada', 'Russia', 'China'],
    answer: 1,
  },
  {
    question: 'Mount Kilimanjaro is located in which country?',
    choices: ['Kenya', 'Tanzania', 'Uganda'],
    answer: 1,
  },
  {
    question: 'Which river is the longest in the world?',
    choices: ['Amazon', 'Nile', 'Yangtze'],
    answer: 1,
  },
  {
    question: 'The Great Barrier Reef is off the coast of which country?',
    choices: ['Australia', 'New Zealand', 'Fiji'],
    answer: 0,
  },
  {
    question: "Which city is known as the 'Eternal City'?",
    choices: ['Rome', 'Athens', 'Cairo'],
    answer: 0,
  },
];

const renderData = () => {
  choicesText.innerHTML = '';
  questionText.textContent = questions[questionCount].question;
  questions[questionCount].choices.forEach((choice, index) => {
    const listItem = document.createElement('li');
    listItem.id = index;
    listItem.textContent = choice;
    choicesText.appendChild(listItem);

    listItem.addEventListener('click', () => {
      document.querySelectorAll('#choices li').forEach((el) => {
        el.classList.remove('selected');
      });

      listItem.classList.add('selected');
    });
  });
};

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const selectedChoice = document.querySelector('#choices li.selected');

  if (!selectedChoice) {
    alert('Please select an answer before submitting.');
    return;
  }

  const selectedIndex = Number(selectedChoice.id);

  if (selectedIndex === questions[questionCount].answer) {
    score += 1;
  }

  questionCount += 1;

  if (questionCount >= questions.length) {
    questionText.textContent = 'Quiz completed!';
    choicesText.innerHTML = `<li>You scored ${score} out of ${questions.length}</li>`;
    submitBtn.disabled = true;
    return;
  }

  renderData();
});

renderData();
