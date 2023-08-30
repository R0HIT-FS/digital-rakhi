const btn=document.getElementById('btn');
const note=document.getElementById('note');
setTimeout(() => {
    note.innerText="Note: This webpage is designed for desktops and laptops ONLY.";
}, 6000);
setInterval(() => {
    if (note.innerText!=""){
        note.innerText=""
    }
}, 11000);
function Spin() {
    btn.addEventListener("click",window.location.reload())
}