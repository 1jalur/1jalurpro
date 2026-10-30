/* DATA SUPLAYER */
function sup(){const m={};[...D.BELANJA,...D.STOK2,...D.SUPB.map(r=>({toko:r.toko,bel:r.qty,hrg:r.hrg}))].forEach(r=>{const k=K(r.toko);if(!k)return;m[k]=m[k]||{nm:r.toko,it:0,tot:0};m[k].it++;m[k].tot+=n(r.bel)*n(r.hrg)});const L=Object.values(m).sort((a,b)=>b.tot-a.tot).filter(x=>!q||x.nm.toLowerCase().includes(q));
return sbar().replace('Cari...','Cari nama toko...')+mform('sp','INPUT DATA SUPLAYER','SUPB','qty')+tbl('SUPB',SB,'Data suplayer',0)+`<datalist id="tk">${Object.values(m).map(x=>`<option value="${esc(x.nm)}">`).join('')}</datalist>`}
function sp(k,f,v){D.SUP[k]=D.SUP[k]||{};D.SUP[k][f]=v;save()}
