const hambtn = document.querySelector('.bars .img');
const backdrop = document.querySelector('.backdrop');
const drop_nav = document.querySelector('.drop_nav');
const nav = document.querySelector('.con');
const x =document.querySelector('.x');
 
hambtn.addEventListener('click', () => {
    backdrop.classList.add('open');
    drop_nav.style.marginTop = '0';
    drop_nav.style.position = 'fixed';
});
 
backdrop.addEventListener('click', () => {
    backdrop.classList.remove('open');
    drop_nav.style.marginTop = '-9rem';
});

drop_nav.addEventListener('click', () => {
    backdrop.classList.remove('open');
    drop_nav.style.marginTop = '-9rem';
});
nav.addEventListener('click', () => {
    backdrop.classList.remove('open');
    drop_nav.style.marginTop = '-9rem';
});
x.addEventListener('click', () => {
    backdrop.classList.remove('open');
    drop_nav.style.marginTop = '-9rem';
});
