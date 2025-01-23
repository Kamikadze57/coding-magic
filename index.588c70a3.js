document.addEventListener("DOMContentLoaded",()=>{let e=document.getElementById("field"),t=document.getElementById("ball");(()=>{let n=e.getBoundingClientRect(),i=t.getBoundingClientRect(),d=(n.width-i.width)/2,o=(n.height-i.height)/2;t.style.left=`${d}px`,t.style.top=`${o}px`})(),e.addEventListener("click",n=>{let i=e.getBoundingClientRect(),d=t.getBoundingClientRect().width/2,o=n.clientX-i.left,l=n.clientY-i.top,a=i.width-d,h=i.height-d,r=Math.min(Math.max(o,d),a),p=Math.min(Math.max(l,d),h);t.style.transition="left 0.5s ease, top 0.5s ease",t.style.left=`${r-d}px`,t.style.top=`${p-d}px`})});const e=document.createElement("style");e.textContent=`
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
    `,document.head.appendChild(e);
//# sourceMappingURL=index.588c70a3.js.map
