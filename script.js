document.getElementById('switch-en').addEventListener('click', () => {
  document.querySelector('.lang-en').style.display = 'block';
  document.querySelector('.lang-fr').style.display = 'none';
});

document.getElementById('switch-fr').addEventListener('click', () => {
  document.querySelector('.lang-fr').style.display = 'block';
  document.querySelector('.lang-en').style.display = 'none';
});