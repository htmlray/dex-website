const navMenuEffect = document.querySelector('#dropbtn');
const hiddenNavs = document.querySelector('.header-navs');
const clickBody = document.getElementsByTagName('body');

navMenuEffect.addEventListener('click', () => {
    if (hiddenNavs.style.display == 'none') {
        hiddenNavs.style.display = 'block';
    } else {
        hiddenNavs.style.display = 'none';
    }
});