document.addEventListener("DOMContentLoaded",()=>{let e=["stone","scissors","paper"],t=u(),o="",n=0,r=0,s=document.querySelector(".rps__text"),l=document.querySelector(".rps-result__btn"),c=document.querySelectorAll(".rps-score__text");function u(){return e[Math.floor(Math.random()*e.length)]}document.querySelectorAll(".rps-choose__btn").forEach((t,n)=>{t.addEventListener("click",()=>{o=e[n]})}),l.addEventListener("click",()=>{var e,l;if(void 0===o){s.textContent="Будь ласка, виберіть ваш варіант!",s.style.color="red";return}let d=(e=o)===(l=t)?"draw":"stone"===e&&"scissors"===l||"scissors"===e&&"paper"===l||"paper"===e&&"stone"===l?"win":"lose";"win"===d?(n++,s.textContent="Ви виграли раунд!",s.style.color="green"):"lose"===d?(r++,s.textContent="Комп’ютер виграв раунд!",s.style.color="red"):(s.textContent="Нічия!",s.style.color="blue"),c[0].textContent=`\u{41A}\u{43E}\u{43C}\u{43F}'\u{44E}\u{442}\u{435}\u{440} - ${r}`,c[1].textContent=`\u{412}\u{438} - ${n}`,o=void 0,t=u()})});
//# sourceMappingURL=index.cc9c6fda.js.map
