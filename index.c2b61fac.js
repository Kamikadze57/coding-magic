const t=document.querySelectorAll("[data-Num-input]"),e=document.querySelector("[data-maxNum-result]");function n(){let n=Number.MIN_SAFE_INTEGER,u=!1;t.forEach(t=>{let e=Number(t.value);isNaN(e)?u=!0:n=Math.max(n,e)}),u?e.textContent="Будь ласка, введіть лише цифри":e.textContent=n}t.forEach(t=>{t.addEventListener("input",n)});
//# sourceMappingURL=index.c2b61fac.js.map
