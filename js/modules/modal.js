export default class Modal {
  constructor(abrir, fechar, container) {
    this.botaoAbrir = document.querySelector(abrir);
    this.botaoFechar = document.querySelector(fechar);
    this.modalContainer = document.querySelector(container);
    this.toggleModal = this.toggleModal.bind(this);
    this.clickForaModal = this.clickForaModal.bind(this);
  }

  toggleModal(event) {
    event.preventDefault();
    this.modalContainer.classList.toggle('ativo');
  }

  clickForaModal(event) {
    if (event.target === this.modalContainer) {
      this.toggleModal(event);
    }
  }

  addModalEvent() {
    this.botaoAbrir.addEventListener('click', this.toggleModal);
    this.botaoFechar.addEventListener('click', this.toggleModal);
    this.modalContainer.addEventListener('click', this.clickForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.modalContainer) {
      this.addModalEvent();
    }
  }
}
