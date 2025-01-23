const e=document.querySelector("[data-inputTime]"),t=document.querySelector("[data-resultTime]");document.querySelector("[data-btnTime]").addEventListener("click",()=>{let o=parseInt(e.value),a=Math.floor(o/3600),n=Math.floor(o%3600/60);t.textContent=`${a}\u{434}\u{43D}. ${n}:${o%60}`});
//# sourceMappingURL=index.fa509945.js.map
