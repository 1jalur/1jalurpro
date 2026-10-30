/* Kotak pencarian di atas tabel */
const sbar=()=>`<div class="bar"><input id="q" placeholder="Cari..." value="${esc(q)}" oninput="q=this.value.toLowerCase();draw();const e=document.getElementById('q');e.focus();e.setSelectionRange(99,99)"></div>`;
