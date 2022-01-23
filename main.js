let navbar = document.querySelector('.nav-bar');

window.onscroll=function(){
    if (window.scrollY >= 110) {
        navbar.classList.add('Sticky');
    }else{
        navbar.classList.remove('Sticky');
    }
}

