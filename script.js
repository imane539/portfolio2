document.querySelector(".arrow i").onclick=function(){

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
}

const mob=document.querySelector('.mobile-hide');
const navmenu=document.querySelector('nav');
mob.addEventListener('click',()=>{
    mob.classList.toggle('active');
    navmenu.classList.toggle('active');

})
document.querySelectorAll("nav li a").forEach(n=>n.
    addEventListener('click',()=>{
     mob.classList.remove('active');
    navmenu.classList.remove('active'); 
    }))
