const pages=[...document.querySelectorAll(".page")];let current=0;
function showPage(n){if(n<0||n>=pages.length)return;pages[current].classList.remove("active");current=n;pages[current].classList.add("active");window.scrollTo({top:0,behavior:"smooth"});}
function nextPage(){showPage(current+1)}
function checkPassword(){const v=document.getElementById("password").value.trim();const e=document.getElementById("error");if(v==="26/09"){e.textContent="";showPage(1)}else{e.textContent="Hmm… birthday girl ko password yaad nahi? 👀";document.getElementById("password").animate([{transform:"translateX(-6px)"},{transform:"translateX(6px)"},{transform:"translateX(0)"}],{duration:280})}}
document.getElementById("password").addEventListener("keydown",e=>{if(e.key==="Enter")checkPassword()});
function heart(){const h=document.createElement("span");h.className="float-heart";h.textContent=["♡","♥","✦"][Math.floor(Math.random()*3)];h.style.left=Math.random()*100+"vw";h.style.fontSize=(9+Math.random()*10)+"px";h.style.animationDuration=(6+Math.random()*6)+"s";h.style.setProperty("--drift",(Math.random()*120-60)+"px");document.getElementById("hearts").appendChild(h);setTimeout(()=>h.remove(),13000)}
setInterval(heart,420);for(let i=0;i<8;i++)setTimeout(heart,i*180);
function celebrate(){for(let i=0;i<70;i++){const c=document.createElement("i");c.className="confetti";c.style.left="50%";c.style.top="48%";c.style.setProperty("--x",(Math.random()*700-350)+"px");c.style.setProperty("--y",(Math.random()*650-250)+"px");c.style.transform=`rotate(${Math.random()*360}deg)`;document.getElementById("sparkles").appendChild(c);setTimeout(()=>c.remove(),1800)}
for(let i=0;i<35;i++){const s=document.createElement("i");s.className="spark";s.style.left="50%";s.style.top="45%";s.style.setProperty("--x",(Math.random()*500-250)+"px");s.style.setProperty("--y",(Math.random()*450-225)+"px");document.getElementById("sparkles").appendChild(s);setTimeout(()=>s.remove(),1300)}
document.querySelectorAll(".candle b").forEach(x=>x.style.animation="none");document.getElementById("cakeNext").classList.remove("hidden")}
const message=`Ananya, pata hai… har kisi ke saath memories nahi banti.
Kuch log bas life mein aa jaate hain aur phir memories khud banne lagti hain.
Tu unhi logon mein se hai. 🩷🤭

Hum dono ko saathme jyda time nhi hua par fir bhi aisa lgta h ki hum dono saalon se dost h aisi friendship hogyi h humari..😭🌷

Humari friendship aisehi bani rahe bss yahi pray krta huu bhagwan se aur bhagwan se yeh bhi pray krta huu ki mujhe har janam me tu as a bestt freinddd mile 🧿🤭`;
let typing=false;
function openLetter(){document.getElementById("envelope").classList.add("hidden");document.getElementById("letterBox").classList.remove("hidden");if(!typing){typing=true;typeText(message,0)}}
function typeText(text,i){const box=document.getElementById("typed");if(i>=text.length){document.getElementById("finalBtn").classList.remove("hidden");return}
box.textContent+=text[i];let delay=34;if(text[i]===".")delay=2600;else if(text[i]=="\n")delay=500;else if(text[i]==",")delay=120;setTimeout(()=>typeText(text,i+1),delay)}
  
