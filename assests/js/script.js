const navSlide=function(){
    const burger=document.querySelector('.burger');
    const nav=document.querySelector('.right');
    const navLinks=document.querySelectorAll('.right a');
    burger.addEventListener('click',function(){
        nav.classList.toggle('nav-active');

        //to animate the nav links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation=``;
            }
            else{
                link.style.animation=`navLinkFade 0.5s ease forwards ${index / 14 + 0.3}s`;
            }
        });
        burger.classList.toggle('toggle');
    });
}
navSlide();
  