document.addEventListener("DOMContentLoaded",()=>{let e;let t=document.querySelector(".slider__list"),d=document.querySelector(".slider__btn--left"),l=document.querySelector(".slider__btn--right"),n=document.querySelectorAll(".slider__item"),r=document.querySelector(".slider__wrapper"),s=0,c=n.length,a=n[0].clientWidth,i=document.createElement("div");i.classList.add("slider__dots"),r.appendChild(i),n.forEach((e,t)=>{let d=document.createElement("span");d.classList.add("slider__dot"),0===t&&d.classList.add("active"),d.dataset.index=t,i.appendChild(d)});let o=document.querySelectorAll(".slider__dot");function u(){t.style.transform=`translateX(${-s*a}px)`,o.forEach((e,t)=>{e.classList.toggle("active",t===s)})}function _(){e=setInterval(()=>{s=(s+1)%c,u()},3e3)}function m(){clearInterval(e),_()}l.addEventListener("click",()=>{s=(s+1)%c,u(),m()}),d.addEventListener("click",()=>{s=(s-1+c)%c,u(),m()}),i.addEventListener("click",e=>{e.target.classList.contains("slider__dot")&&(s=parseInt(e.target.dataset.index),u(),m())}),_()});
//# sourceMappingURL=index.6eb43709.js.map
