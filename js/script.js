// Fetch the JSON file
fetch('flashcards.json')
  .then(response => response.json())
  .then(data => {
    const flashcardContainer = document.querySelector('.flashcard-container');

    data.flashcards.forEach(card => {
      // Create the flashcard element
      const flashcard = document.createElement('div');
      flashcard.classList.add('flashcard');

      // Create the question side
      const questionDiv = document.createElement('div');
      questionDiv.classList.add('question');
      questionDiv.innerHTML = `<div class="content">${card.question}</div>`;

      // Create the answer side
      const answerDiv = document.createElement('div');
      answerDiv.classList.add('answer');
      answerDiv.innerHTML = `<div class="content">${card.answer}</div>`;

      // Add question and answer to flashcard
      flashcard.appendChild(questionDiv);
      flashcard.appendChild(answerDiv);

      // Add flashcard to container
      flashcardContainer.appendChild(flashcard);

      // Add hover effect to flip card
      flashcard.addEventListener('mouseover', () => {
        flashcard.style.transform = 'rotateY(180deg)';
      });
      flashcard.addEventListener('mouseout', () => {
        flashcard.style.transform = 'rotateY(0deg)';
      });
    });
  })
  .catch(error => {
    console.error('Error loading flashcards:', error);
  });
