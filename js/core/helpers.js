/* Format uang, penjumlahan, daftar customer, filter, tanggal */
const fm=x=>hide?'Rp ••••':'Rp '+rp(x),sum=(a,f)=>a.reduce((t,r)=>t+n(f(r)),0),sisa=r=>n(r.bel)-n(r.pak);
const CL=()=>{const m={};[...D.BELANJA,...D.TIMELINE.filter(t=>t.pic!=='Sipil')].forEach(r=>{const k=nk(r.cust);if(k&&!m[k])m[k]=String(r.cust).toUpperCase()});return Object.values(m)};
const mt=r=>!cf||nk(r.cust)===nk(cf),iso=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
