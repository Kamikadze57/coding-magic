const e=document.querySelector("[data-inputYear]"),t=document.querySelector("[data-btnYear]"),r=document.querySelector("[data-textYear]");t.addEventListener("click",()=>{let t=parseInt(e.value);t%4==0&&t%100!=0||t%400==0?(r.textContent="Ви народилися у високосний рік!",r.style.color="green"):(r.textContent="Ви народилися не у високосний рік!",r.style.color="red")});
//# sourceMappingURL=index.eefa8507.js.map
