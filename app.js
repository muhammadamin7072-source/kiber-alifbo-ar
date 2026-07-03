let CONTENT={};
fetch("./assets/content.json").then(r=>r.json()).then(items=>{items.forEach(([letter,term,desc])=>CONTENT[letter]={term,desc});});
const card=document.getElementById("infoCard"), letterEl=document.getElementById("letter"), termEl=document.getElementById("term"), descEl=document.getElementById("desc");
function showInfo(key){const item=CONTENT[key]; if(!item)return; letterEl.textContent=key; termEl.textContent=item.term; descEl.textContent=item.desc; card.style.display="block";}
document.getElementById("closeBtn").onclick=()=>card.style.display="none";
window.addEventListener("load",()=>{document.querySelectorAll(".hotspot").forEach(el=>el.addEventListener("click",()=>showInfo(el.dataset.key)));});
