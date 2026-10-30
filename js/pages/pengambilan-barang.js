/* Form Pengambilan Barang */
/* ===== FORM PENGAMBILAN BARANG & LAPORAN REIMBURSE ===== */
var RBD={items:[{},{},{}],fotos:[]};
const pbtab=sc=>{const c=(sc?'border:1px solid var(--bd)':'border:1px solid #444')+';padding:4px 6px;text-align:center';return `<table style="width:100%;border-collapse:collapse"><thead><tr>${['NO','TANGGAL','NAMA BARANG','JUMLAH','PROJECT','PENGAMBIL'].map((h,i)=>`<th style="${c};background:${sc?'var(--ac2)':'#e8eefc'};width:${[6,15,34,10,20,15][i]}%">${h}</th>`).join('')}</tr></thead><tbody>${Array.from({length:30},(_,i)=>`<tr>${[i+1,'','','','',''].map(v=>`<td style="${c};height:${sc?26:32}px">${v}</td>`).join('')}</tr>`).join('')}</tbody></table>`};
function pbview(){return sfhead('FORM PENGAMBILAN BARANG','<button class="btn" style="margin-left:auto" onclick="pbprint()">&#128424; Cetak / Simpan PDF</button>')+'<div class="note" style="margin:0 0 10px">Klik Cetak, lalu pilih printer atau "Simpan sebagai PDF". Form berisi 30 baris bernomor 1-30.</div><div class="w">'+pbtab(1)+'</div>'}
function pbprint(){pwin('<h2 style="text-align:center;margin:0 0 10px">FORM PENGAMBILAN BARANG</h2>'+pbtab(0))}
