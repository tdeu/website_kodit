$(document).ready(function () {

    $(".menu--enter").on("click",()=>{
    
        $(".menu").css({
            right:"0%"
        })
    })

    $("a").on("click",()=>{
    
        $(".menu").css({
            right:"-100%"
        })
    })
    
    $(".menu--exit").on("click",()=>{
        
        $(".menu").css({
            right:"-100%"
        })
    })


    let subMenu = document.querySelector('.sub-menu');
    let se = document.querySelector('.se')

    let submenuA = document.querySelectorAll('.sub-menu a');

    se.addEventListener('click',()=>{
      
        subMenu.classList.toggle('active');
        if(subMenu.classList.contains('active')){
            se.innerHTML = "Services <i class='fas fa-chevron-up'></i>"
        }else{
            se.innerHTML = "Services <i class='fas fa-chevron-down'></i>"
        }
       
    })

    submenuA.forEach(ser => {
        ser.addEventListener('click',()=>{
            subMenu.classList.remove('active');
            if(subMenu.classList.contains('active')){
                se.innerHTML = "Services <i class='fas fa-chevron-up'></i>"
            }else{
                se.innerHTML = "Services <i class='fas fa-chevron-down'></i>"
            }
        })
    })

    let sp = document.querySelector('.sp-lang');
    let sreal = document.querySelector('.sreal');
    let lg = document.querySelector('.lang')
    let spa = document.querySelectorAll('.li-lang a');

    const burgerMenu = document.getElementById('menu--enter');
    const menuList = document.getElementById('menu');

    const li = document.querySelector('.li-lang')


    window.addEventListener('click' , (event)=> {
        const isClickInside = burgerMenu.contains(event.target) || menuList.contains(event.target) ||  event.target.classList.contains('fa-chevron-down') || event.target.classList.contains('fa-chevron-up') ;
       
        if (!isClickInside) {
            
            $(".menu").css({
                right:"-100%"
            })

            lg.classList.remove('active');
            subMenu.classList.remove('active');
        }
        
    })

    let lang = localStorage.getItem('locales') === 'en' ? 'EN' : 'FR';

 
    sreal.addEventListener('click',()=>{
        
        lg.classList.toggle('active');
        if(lg.classList.contains('active')){
            sp.innerHTML = ` <i class='fas fa-chevron-up'></i>`
        }else{
            sp.innerHTML = `  <i class='fas fa-chevron-down'></i>`
        }
    })


    spa.forEach(s => {
        s.addEventListener('click',()=>{
            lg.classList.remove('active');
         
            if(lg.classList.contains('active')){
                sp.innerHTML = ` <i class='fas fa-chevron-up'></i>`
            }else{
                sp.innerHTML = `  <i class='fas fa-chevron-down'></i>`
            }
        })
    })
    
});
