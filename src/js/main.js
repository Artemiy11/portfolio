const hamburger = document.querySelector('.hamburger'),
      close = document.querySelector('.menu__close'),
      menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__level_percent'),
      activeLine = document.querySelectorAll('.skills__level_line_active');

counters.forEach((item, i) => {
    if (item.innerHTML.replace(/\%/, '') > 100) {
        item.innerHTML = `100%`;
    } else if (item.innerHTML.replace(/\%/, '') < 0) {
        item.innerHTML = `0%`;
    }
    
    activeLine[i].style.width = item.innerHTML;
});