/* Fungsi bantu umum: angka, rupiah, teks, escape HTML */
const n=x=>+x||0,rp=x=>n(x).toLocaleString('id-ID'),K=x=>String(x??'').trim().toLowerCase(),nk=x=>K(x).replace(/ pik$/,''),esc=s=>String(s??'').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');
