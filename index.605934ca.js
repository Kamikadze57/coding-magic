document.addEventListener("DOMContentLoaded",()=>{let t=document.getElementById("field"),e=document.getElementById("ball");(()=>{let t=["otskok-myacha.mp3","otskok-myacha.mp3","otskok-myacha.mp3"],e=Math.floor(Math.random()*t.length);new Audio(t[e])})(),(()=>{let n=t.getBoundingClientRect(),o=e.getBoundingClientRect(),i=(n.width-o.width)/2,d=(n.height-o.height)/2;e.style.left=`${i}px`,e.style.top=`${d}px`})(),t.addEventListener("click",n=>{let o=t.getBoundingClientRect(),i=e.getBoundingClientRect().width/2,d=n.clientX-o.left,a=n.clientY-o.top,l=o.width-i,h=o.height-i,p=Math.min(Math.max(d,i),l),r=Math.min(Math.max(a,i),h);e.style.transition="left 0.5s ease, top 0.5s ease",e.style.left=`${p-i}px`,e.style.top=`${r-i}px`})});const t=document.createElement("style");t.textContent=`
    #field {
    position: relative;
    width: 720px;
    height: 220px;
    background: #228B22; 
    border: 5px solid white;
    border-radius: 20px;
    margin: 20px auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    }
    
    #ball {
    position: absolute;
    width: 50px;
    height: 50px;
    background: url("../ball.jpg") no-repeat center center;
    background-size: cover;
    border-radius: 50%;
     box-shadow: 0 4px 8px rgba(0, 0, 0, 0);
    }
    `,document.head.appendChild(t);
//# sourceMappingURL=index.605934ca.js.map
