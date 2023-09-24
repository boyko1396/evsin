export default class GuideCard {
  constructor() {
    this.GuideCardBtnToggle = document.querySelectorAll('.js-guide-card-toggle');
    this.setupEventListeners();
  }

  toggleGuideCard(event) {
    const listItem = event.target.closest('.guide-card');
    listItem.classList.toggle('is-show');
  }

  setupEventListeners() {
    this.GuideCardBtnToggle.forEach((button) => {
      button.addEventListener('click', this.toggleGuideCard);
    });
  }
}