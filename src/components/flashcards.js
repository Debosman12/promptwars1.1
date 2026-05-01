import { electionData } from '../data/electionData.js';

export function renderFlashcards(container) {
  electionData.flashcards.forEach(item => {
    const card = document.createElement('div');
    card.className = 'flashcard';

    const inner = document.createElement('div');
    inner.className = 'flashcard-inner';

    const front = document.createElement('div');
    front.className = 'flashcard-front';
    const term = document.createElement('h3');
    term.textContent = item.term;
    front.appendChild(term);

    const back = document.createElement('div');
    back.className = 'flashcard-back';
    const backTerm = document.createElement('h3');
    backTerm.textContent = item.term;
    const def = document.createElement('p');
    def.textContent = item.definition;
    back.appendChild(backTerm);
    back.appendChild(def);

    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);

    // Flip animation on click
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });

    container.appendChild(card);
  });
}
