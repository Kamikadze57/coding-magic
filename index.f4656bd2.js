!function(){let e=document.querySelector("[data-inputYear]"),t=document.querySelector("[data-btnYear]"),n=document.querySelector("[data-textYear]");t.addEventListener("click",()=>{let t=parseInt(e.value);t%4==0&&t%100!=0||t%400==0?(n.textContent="Ви народилися у високосний рік!",n.style.color="green"):(n.textContent="Ви народилися не у високосний рік!",n.style.color="red")})}();
//# sourceMappingURL=index.f4656bd2.js.map
