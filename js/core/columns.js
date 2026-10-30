/* Definisi kolom tabel untuk tiap jenis data */
const CUS=['cust','Customer','cust'],VAL=['val','Validasi','sel',['Ready','Sudah Belanja','No.ready']];
const BEL=[['tgl','Tgl input','date'],CUS,['brg','Nama barang','text'],['rap','RAP','num'],['bel','Belanja','num'],['pak','Terpakai','num'],['sisa','Sisa','calc',sisa],['sat','Satuan','text'],['ket','Ket.','calc',r=>sisa(r)>0?'STOK':'HABIS'],['hrg','Harga satuan','num'],['tb','Total belanja','calc',r=>n(r.bel)*n(r.hrg),1],['tt','Total terpakai','calc',r=>n(r.pak)*n(r.hrg),1],['toko','Toko','text'],VAL];
const SB=[['tgl','Tanggal input','date'],['brg','Nama barang','text'],['qty','Qty','num'],['sat','Satuan','text'],['hrg','Harga satuan','rp'],['jml','Jumlah','rpc',r=>n(r.qty)*n(r.hrg)],['toko','Toko','toko']];
const SR=SB.map(c=>c[0]==='brg'?['brg','Nama barang','sbrg']:c);
const SRV=SR.map(c=>c[2]==='rpc'?c:c[2]==='rp'?[c[0],c[1],'vrp']:c[2]==='date'?[c[0],c[1],'vdt']:[c[0],c[1],'view']);
const SGP=[['tgl','Tanggal input','date'],['brg','Nama barang','text'],['proj','Project','view'],['bel','Qty','num'],['sat','Satuan','text'],['hrg','Harga satuan','rp'],['jml','Jumlah','rpc',r=>n(r.bel)*n(r.hrg)],['toko','Toko','toko']];
const SG=[['tgl','Tanggal input','date'],['brg','Nama barang','text'],['bel','Qty','num'],['sat','Satuan','text'],['hrg','Harga satuan','rp'],['jml','Jumlah','rpc',r=>n(r.bel)*n(r.hrg)],['toko','Toko','toko']];
const JS=t=>[['tgl','Input','date'],CUS,['item',t,'text'],['pic','PIC','text'],['qtb','Qty TB','num'],['qtt','Qty TT','num'],['sat','Satuan','text'],['hrg','Harga satuan','num'],['tb','TB jumlah','calc',r=>n(r.qtb)*n(r.hrg),1],['tt','TT jumlah','calc',r=>n(r.qtt)*n(r.hrg),1],['ket','Keterangan','text'],['val','Validasi','sel',['Valid','Cek']]];
const OPR=[['tgl','Input','date'],CUS,['keg','Kegiatan','text'],['sales','Sales','text'],['qty','Qty','num'],['sat','Satuan','text'],['hrg','Harga satuan','num'],['tot','Jumlah','calc',r=>n(r.qty)*n(r.hrg),1],['ket','Keterangan','text'],['val','Validasi','sel',['Valid','Cek']]];
const krg=r=>Math.max(0,n(r.keb)-n(r.ada));
const IVS=['Belum','Pengajuan','Ready','Rusak'],INV=[['item','Item barang','text'],['merk','Merk','text'],['qty','Qty','num'],['sat','Satuan','text'],['hrg','Satuan harga','num'],['jml','Jumlah','calc',r=>n(r.qty)*n(r.hrg),1],['ket','Keterangan','text'],['st','Status','sel',IVS]];
const LST=[['brg','Barang','text'],['merk','Merek','text'],['keb','Kebutuhan','num'],['ada','Sudah ada','num'],['krg','Kurang','calc',krg],['hrg','Total harga','num',0,1]];
