const menuButton = document.getElementById('menu-button');
const sidebar = document.getElementById('sidebar');
const closeButton = document.getElementById('close-button');

menuButton.addEventListener('click', () => {
  sidebar.style.left = '0';
});

closeButton.addEventListener('click', () => {
  sidebar.style.left = '-300px';
});
