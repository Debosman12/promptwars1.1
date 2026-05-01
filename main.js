import './style.css';
import { renderTimeline } from './src/components/timeline.js';
import { renderFlashcards } from './src/components/flashcards.js';
import { renderQuiz } from './src/components/quiz.js';

document.addEventListener('DOMContentLoaded', () => {
  const navBtns = document.querySelectorAll('.nav-btn');
  const views = document.querySelectorAll('.view');

  // Initialize components
  renderTimeline(document.getElementById('timeline-container'));
  renderFlashcards(document.getElementById('flashcards-container'));
  renderQuiz(document.getElementById('quiz-container'));

  // Navigation Logic
  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active classes
      navBtns.forEach(b => b.classList.remove('active'));
      views.forEach(v => v.classList.remove('active'));

      // Add active class to clicked button
      btn.classList.add('active');

      // Show corresponding view
      const targetId = btn.getAttribute('data-target') + '-view';
      document.getElementById(targetId).classList.add('active');
    });
  });
});
