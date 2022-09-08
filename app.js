const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if(window.scrollY >=50){
        header.classList.add('active_nav');
    }
    else{
        header.classList.remove('active_nav');
    }
})