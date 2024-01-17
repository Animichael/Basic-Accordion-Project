const accordion =document.getElementsByClassName('accordion-inner-content');

for(i=0; i < accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}

const accordionContainer =document.querySelector('.accordion-main-content');
const btnClose =document.querySelector('.btn-close');
const btnShow =document.querySelector('.show-accordion');

btnClose.addEventListener('click', function(){
    accordionContainer.style.display="none"
})

btnShow.addEventListener('click', function(){
    accordionContainer.style.display="block"
})
