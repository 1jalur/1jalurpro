/* Mode Hanya lihat dan penggambar ulang halaman (draw) */
/* ===== MODE HANYA LIHAT ===== */
var VSNAP='';
function lgro(){try{const m=lgme();return !!(m&&m.r==='viewer')}catch(e){return false}}
function lgsnap(){VSNAP=lgro()?JSON.stringify(D):''}
function lgrestoreD(){Object.keys(D).forEach(k=>delete D[k]);Object.assign(D,JSON.parse(VSNAP))}
function lgrev(){if(!VSNAP)return;lgrestoreD();draw()}
function draw(){if(VSNAP&&lgro()&&JSON.stringify(D)!==VSNAP)lgrestoreD();draw0();lgapply()}
function lgapply(){if(!lgro())return;const m=document.getElementById('main');if(!m)return;
const SAFE=/^(go|fback|fopen|sgtab|optab|sopf|sopfb|sopback|sopopen|bprint|rprint|aprint|sjprint|qcprint|qcblank|aprw|fclose|lgout|pbprint|rbprint)\(/;
m.querySelectorAll('button').forEach(b=>{if(!SAFE.test(b.getAttribute('onclick')||''))b.style.display='none'});
m.querySelectorAll('input,select,textarea').forEach(e=>{const h=(e.getAttribute('oninput')||'')+(e.getAttribute('onchange')||'');if(e.id==='apw'||e.id==='q'||/\b(q|rc|cf)=/.test(h)){e.setAttribute('data-k','1');return}e.setAttribute('data-ro','1');if(e.tagName==='SELECT')e.disabled=true;else{e.readOnly=true;e.tabIndex=-1;e.style.pointerEvents='none'}});
m.querySelectorAll('[contenteditable]').forEach(e=>e.setAttribute('contenteditable','false'));
m.querySelectorAll('.pn').forEach(p=>{if(p.querySelector('[data-ro]')&&!p.querySelector('[data-k]')&&!p.querySelector('.gt,.gc'))p.style.display='none'})}

