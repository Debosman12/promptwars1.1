import { electionData } from '../data/electionData.js';

export function renderQuiz(container) {
  let currentQuestion = 0;
  let score = 0;
  const questions = electionData.quiz;

  const card = document.createElement('div');
  card.className = 'quiz-card';

  const header = document.createElement('div');
  header.className = 'quiz-header';
  
  const progress = document.createElement('div');
  progress.className = 'quiz-progress';
  
  const questionText = document.createElement('h2');
  questionText.className = 'quiz-question';

  header.appendChild(progress);
  header.appendChild(questionText);

  const optionsContainer = document.createElement('div');
  optionsContainer.className = 'quiz-options';

  const resultContainer = document.createElement('div');
  resultContainer.className = 'quiz-result';
  const resultTitle = document.createElement('h2');
  resultTitle.textContent = "Quiz Complete!";
  const scoreDisplay = document.createElement('div');
  scoreDisplay.className = 'score';
  const restartBtn = document.createElement('button');
  restartBtn.className = 'restart-btn';
  restartBtn.textContent = 'Restart Quiz';

  resultContainer.appendChild(resultTitle);
  resultContainer.appendChild(scoreDisplay);
  resultContainer.appendChild(restartBtn);

  card.appendChild(header);
  card.appendChild(optionsContainer);
  card.appendChild(resultContainer);
  container.appendChild(card);

  function loadQuestion() {
    if (currentQuestion >= questions.length) {
      showResult();
      return;
    }

    const q = questions[currentQuestion];
    progress.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    questionText.textContent = q.question;
    optionsContainer.innerHTML = '';

    q.options.forEach((opt, index) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option';
      btn.textContent = opt;
      btn.onclick = () => checkAnswer(index, btn);
      optionsContainer.appendChild(btn);
    });
  }

  function checkAnswer(selectedIndex, btn) {
    const q = questions[currentQuestion];
    const allBtns = optionsContainer.querySelectorAll('.quiz-option');
    allBtns.forEach(b => b.disabled = true);

    if (selectedIndex === q.answer) {
      btn.classList.add('correct');
      score++;
    } else {
      btn.classList.add('wrong');
      allBtns[q.answer].classList.add('correct');
    }

    setTimeout(() => {
      currentQuestion++;
      loadQuestion();
    }, 1500);
  }

  function showResult() {
    header.style.display = 'none';
    optionsContainer.style.display = 'none';
    resultContainer.style.display = 'flex';
    scoreDisplay.textContent = `${score} / ${questions.length}`;
  }

  restartBtn.onclick = () => {
    currentQuestion = 0;
    score = 0;
    header.style.display = 'block';
    optionsContainer.style.display = 'grid';
    resultContainer.style.display = 'none';
    loadQuestion();
  };

  loadQuestion();
}
