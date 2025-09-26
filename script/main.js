/*
 *** Logic to navigate in the Projects Grid ***
 */

const projectCards = document.querySelectorAll('li.projects-card');
const projectCardsLength = projectCards.length;

function expandSection(controlEl, targetSection) {
  controlEl.setAttribute('aria-expanded', true);
  targetSection.classList.remove('hidden');
  targetSection.classList.add('visible');
}
function collapseSection(controlEl, targetSection) {
  controlEl.setAttribute('aria-expanded', false);
  targetSection.classList.remove('visible');
  targetSection.classList.add('hidden');
}

function handleProjectCardsNavigation(event, index) {
  const currentElement = projectCards[index];
  const moreSection = currentElement.querySelector('.projects-card__text');

  // Arrow keys navigation: shifting focus between cards

  if (
    (event.key === 'ArrowRight' || event.key === 'ArrowDown') &&
    index !== projectCardsLength - 1
  ) {
    collapseSection(currentElement, moreSection);
    currentElement.blur();
    projectCards[index + 1].focus();
  }
  if ((event.key === 'ArrowLeft' || event.key === 'ArrowUp') && index !== 0) {
    collapseSection(currentElement, moreSection);
    currentElement.blur();
    projectCards[index - 1].focus();
  }

  // Expanding and collapsing the "More" section

  if (event.key === 'Enter') {
    if (
      (!currentElement.getAttribute('aria-expanded') ||
        currentElement.getAttribute('aria-expanded') === 'false') &&
      moreSection.classList.contains('hidden')
    ) {
      expandSection(currentElement, moreSection);
    } else if (
      currentElement.getAttribute('aria-expanded') &&
      moreSection.classList.contains('visible')
    ) {
      collapseSection(currentElement, moreSection);
    }
  }
  if (event.key === 'Escape') {
    if (
      currentElement.getAttribute('aria-expanded') &&
      moreSection.classList.contains('visible')
    ) {
      collapseSection(currentElement, moreSection);
    }
  }
}

projectCards.forEach((card, index) => {
  card.addEventListener('keydown', (event) =>
    handleProjectCardsNavigation(event, index)
  );
});

/*
Logic to execute upon submitting the contact form
*/

const form = document.getElementById('contact-form');
const successMessage = document.getElementById('form-feedback-message');

function handleSubmitForm(event) {
  setTimeout(() => {
    form.reset();
    successMessage.className = 'visible';
    successMessage.innerText = 'Your message has been sent!';
  }, 500);
}

form.addEventListener('submit', handleSubmitForm);

// if the form has been submitted, hide the success message
function handleHideSuccessMessage(event) {
  if (successMessage.className === 'visible') {
    successMessage.className = 'hidden';
    successMessage.innerText = '';
  }
}

form.querySelectorAll('.data-input').forEach((el) => {
  el.addEventListener('keydown', handleHideSuccessMessage);
});
