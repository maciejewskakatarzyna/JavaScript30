const spacing = document.querySelector('#spacing');
const blur = document.querySelector('#blur');
const base = document.querySelector('#base');
const img = document.querySelector('img');
const hl = document.querySelector('.hl');

spacing.addEventListener('input', function() {
  img.style.padding = `${this.value}px`;
});

blur.addEventListener('input', function() {
  img.style.filter = `blur(${this.value}px)`;
});

base.addEventListener('input', function() {
  img.style.background = `${this.value}`;
  hl.style.color = `${this.value}`;
});
