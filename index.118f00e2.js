const t=document.querySelectorAll("[data-maxNum-input]"),e=document.querySelector("[data-maxNum-result]");function a(){let a=Number.MIN_SAFE_INTEGER,n=!1;t.forEach(t=>{let e=Number(t.value);isNaN(e)?n=!0:a=Math.max(a,e)}),n?e.textContent="Будь ласка, введіть лише цифри":e.textContent=a}t.forEach(t=>{t.addEventListener("input",a)});
//# sourceMappingURL=index.118f00e2.js.map
