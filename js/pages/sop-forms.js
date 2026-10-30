/* Data dan bantu untuk form surat jalan, QC, dan pengambilan barang */
/* SOP: form surat jalan & QC */
const BT=['Bagus','Tidak bagus'],BR=['Bersih','Tidak bersih'];
const QCR=[{t:'1. Struktur kekuatan',o:['Sesuai dan Kuat','Tidak sesuai tidak kuat']},{t:'2. Bahan Baku (jenis bahan, warna, dan aksesoris)',o:['Sesuai Perencanaan','Tidak sesuai perencanaan']},{t:'3. Dimensi ukuran sesuai gambar kerja',o:['Sesuai ukuran','Tidak sesuai ukuran']},{h:'4. SAMBUNGAN / PENEMPELAN'},{t:'- Sambungan kerapetan setiap body',o:BT},{t:'- Sambungan kerapetan setiap edging',o:BT},{t:'- Penempelan edging pintu',o:BT},{t:'- Penempelan edging laci',o:BT},{t:'5. Fungsi Engsel, Rell, hendel & Aksesoris',o:['Berfungsi','Tidak berfungsi']},{t:'6. Kelengkapan Aksesoris',o:['Lengkap','Tidak Lengkap']},{h:'7. KEBERSIHAN'},{t:'- Kebersihan body',o:BR},{t:'- Kebersihan pintu',o:BR},{t:'- Kebersihan Laci',o:BR}];
const QCI=QCR.filter(x=>x.o),QCOLD=['Dimensi / ukuran sesuai gambar','Warna & finishing sesuai','Sambungan & lem rapi','Engsel, rel & handle berfungsi','Pintu & laci rata, tidak seret','Permukaan bersih, tanpa goresan','Kelengkapan aksesoris','Kebersihan area kerja'];
let SJD={items:[{},{},{}]},QCD={cek:QCI.map(()=>({}))};
const spj=()=>[...new Set([...(D.FOL.RAPA||[]),...CL()])],dmy=s=>String(s||'').split('-').reverse().join('/');
const sopfx=()=>[['sj','FORM PENGIRIMAN BARANG / SURAT JALAN',D.SJ.length+' surat jalan'],['qc','FORM QC',D.QC.length+' form QC'],['pb','FORM PENGAMBILAN BARANG','Form siap cetak (PDF)'],['rb','LAPORAN REIMBURSE',D.RB.length+' laporan']].filter(x=>!q||x[1].toLowerCase().includes(q.trim())).map(x=>`<div class="pn" style="cursor:pointer" onclick="sopf('${x[0]}')"><b>&#128193; ${x[1]}</b><br><small>${x[2]}</small></div>`);
function sopf(k){SOPS.f=k;q='';draw()}
function sopfb(){SOPS.f='';q='';draw()}
const sfhead=(t,x)=>`<div style="margin:2px 0 10px"><button class="btn" title="Kembali ke daftar folder" aria-label="Kembali ke daftar folder" style="font-size:18px;padding:2px 14px;line-height:1.2" onclick="sopfb()">&larr;</button></div><div class="sh"><h2>SOP :</h2><span style="font-weight:600;font-size:16px">${t}</span>${x||''}</div><datalist id="spl">${spj().map(x=>`<option value="${esc(x)}">`).join('')}</datalist>`;
const sfi=(id,l,v,w,t)=>GF(l,`<input id="${id}" type="${t||'text'}" value="${esc(v||'')}" style="min-width:${w||150}px">`);
function sfview(){return SOPS.f==='sj'?sjview():SOPS.f==='qc'?qcview():SOPS.f==='pb'?pbview():rbview()}
