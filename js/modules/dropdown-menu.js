import outsideClick from './outsideclick.js';

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  const events = ['touchstart', 'click'];
  dropdownMenus.forEach((menu) => {
    // menu.addEventListener('click', handleClick);
    // menu.addEventListener('touchstart', handleClick);
    // Isso é igual à função abaixo
    function handleClick(event) {
      event.preventDefault();
      this.classList.add('active');
      outsideClick(this, events, () => {
        this.classList.remove('active');
      });
    }
    events.forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}
