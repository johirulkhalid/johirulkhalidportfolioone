const menuBtn = document.querySelector('#menu__bar'),
navber = document.querySelector('.navber'),
header_second = document.querySelector('.header__second'),
darkMood = document.querySelector('#dark__mood'),
anim_btn = document.querySelector('#anim__btn'),
spans = anim_btn.getElementsByTagName('span'),
colors = document.querySelector('#colors');
const colorsPalatte = document.querySelector('.colors-paletter');

menuBtn.addEventListener('click', () =>{
    menuBtn.classList.toggle('fa-times');
    navber.classList.toggle('active');
});

window.onscroll = () =>{
    menuBtn.classList.remove('fa-times');
    navber.classList.remove('active');
    colorsPalatte.classList.remove('active');

    if(window.scrollY > 150){
        header_second.classList.add('active');
    }else{
        header_second.classList.remove('active');
    }

    document.querySelectorAll('section').forEach(sec =>{
 
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
    
        if(top >= offset && top < offset + height){
           document.querySelectorAll('.header__second .navber a').forEach(links =>{
              links.classList.remove('active');
              document.querySelector('.header__second .navber a[href*='+ id +']').classList.add('active');
           });
        };
    
     });
    
}

anim_btn.onclick = ()=>{
    for(span of spans){
        span.classList.add('anim');
    }
    setTimeout(function(){
        for(span of spans){
            span.classList.remove('anim');
        }
    }, 1000);
}

const swiper = new Swiper('.swiper', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
colors.onclick = ()=>{
    colorsPalatte.classList.toggle('active');
}
document.querySelectorAll('.colors-paletter .color').forEach(btn =>{
    btn.onclick = ()=>{
        let color = btn.style.background;
        document.querySelector(':root').style.setProperty('--main-color', color);
    }
});

