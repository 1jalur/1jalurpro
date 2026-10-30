/* Tabel data, sel input, tambah / ubah / hapus baris */
function ro(rows,cols,title,note){rows=rows.filter(r=>!q||JSON.stringify(r).toLowerCase().includes(q));const sc=cols.filter(c=>c[4]);
return `<div class="sh"><h2>${title} (${rows.length})</h2></div>${note?`<p class="note">${note}</p>`:''}<div class="w"><table><thead><tr><th>No</th>${cols.map(c=>`<th>${c[1]}</th>`).join('')}</tr></thead><tbody>${rows.map((r,i)=>`<tr><td class="c">${i+1}</td>${cols.map(c=>{const v=c[2]==='calc'||c[2]==='rpc'?c[3](r):r[c[0]];return `<td class="c ${typeof v==='number'?'r':''}">${pv(v,c[2])}</td>`}).join('')}</tr>`).join('')}</tbody>${sc.length?`<tfoot><tr><td></td>${cols.map(c=>c[4]?`<td class="r">${rp(sum(rows,c[2]==='calc'?c[3]:r=>r[c[0]]))}</td>`:'<td></td>').join('')}</tr></tfoot>`:''}</table></div>`}
function tbl(name,cols,title,add=1){const src=D[name],hc=cols.some(c=>c[0]==='cust');
const idx=src.map((r,i)=>i).filter(i=>(!hc||mt(src[i]))&&(!FO[name]||src[i].fld===FO[name])&&(!TF[name]||TF[name](src[i]))&&(!q||(name==='SUPB'?String(src[i].toko||'').toLowerCase():JSON.stringify(src[i]).toLowerCase()).includes(q)));const sc=cols.filter(c=>c[4]);
return `<div class="sh"><h2>${title} (${idx.length})</h2>${add?`<button class="btn" onclick="add('${name}')">+ Tambah</button>`:''}</div><datalist id="cl">${CL().map(c=>`<option value="${c}">`).join('')}</datalist><div class="w"><table><thead><tr>${cols.map(c=>`<th>${c[1]}</th>`).join('')}<th></th></tr></thead><tbody>${idx.map(i=>`<tr${name==='INVEST'?' class="inv-'+K(src[i].st)+'"':''}>${cols.map(c=>cell(name,i,src[i],c)).join('')}<td><button class="x" onclick="del('${name}',${i})">&times;</button></td></tr>`).join('')}</tbody>${sc.length?`<tfoot><tr>${cols.map(c=>c[4]?`<td class="r">${rp(sum(idx.map(i=>src[i]),c[2]==='calc'?c[3]:r=>r[c[0]]))}</td>`:'<td></td>').join('')}<td></td></tr></tfoot>`:''}</table></div>`}
function cell(name,i,r,[k,,t,o]){const v=r[k]??'',a=`onchange="set('${name}',${i},'${k}',this.value,${t==='num'})"`;
if(t==='view')return `<td class="c">${esc(v)}</td>`;
if(t==='vdt')return `<td class="c">${esc(String(v).split('-').reverse().join('/'))}</td>`;
if(t==='vrp')return `<td class="c r">Rp ${rp(v)}</td>`;
if(t==='sbrg')return `<td><input list="sb" value="${esc(v)}" onchange="setb('${name}',${i},this.value)"></td>`;
if(t==='rpc')return `<td class="c r">${fm(o(r))}</td>`;
if(t==='rp')return `<td><input class="r" value="${v===''?'':'Rp '+rp(v)}" data-v="${esc(v)}" onfocus="this.value=this.dataset.v==='0'?'':this.dataset.v" onchange="set('${name}',${i},'${k}',this.value.replace(/[^0-9]/g,''),true)"></td>`;
if(t==='calc'){const x=o(r);return `<td class="c ${typeof x==='number'?'r':''}">${pv(x,'calc')}</td>`}
if(t==='sel')return `<td><select ${a}>${['',...o].map(x=>`<option ${x===v?'selected':''}>${x}</option>`).join('')}</select></td>`;
return `<td><input ${t==='num'?'type="number" step="any"':t==='date'?'type="date"':t==='cust'?'list="cl"':t==='toko'?'list="tk"':''} value="${esc(v)}" ${a}></td>`}
function set(name,i,k,v,isn){D[name][i][k]=isn?n(v):v;save();draw()}
function del(name,i){if(confirm('Hapus baris ini?')){if(name==='STOKOUT')sgrestore(D[name][i]);D[name].splice(i,1);save();draw()}}
function add(name,extra){const cols={BELANJA:BEL,STOK2:SG,SUPB:SB,RAPA:SR,PIC:JS(''),SIPIL:JS(''),OPR:OPR,INVEST:INV,BELUM:LST,AJU:LST}[name]||[],r=Object.assign({},extra);if(FO[name])r.fld=FO[name];if(name==='TIMELINE'){r.cust=cf;r.sales='';r.mulai='';r.sel=''}cols.forEach(c=>{if(c[2]!=='calc'&&c[2]!=='rpc')r[c[0]]=c[2]==='num'||c[2]==='rp'?0:c[2]==='date'?iso(new Date()):''});if(cf&&cols.some(c=>c[0]==='cust'))r.cust=cf;D[name].push(r);save();draw()}
