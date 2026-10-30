/* Penyimpanan foto di IndexedDB (salinan di perangkat) */
const idb=()=>new Promise((ok,no)=>{try{const q=indexedDB.open('produksi_foto',1);q.onupgradeneeded=()=>q.result.createObjectStore('f');q.onsuccess=()=>ok(q.result);q.onerror=()=>no(q.error)}catch(e){no(e)}});
async function ifput(k,v){const d=await idb();return new Promise((ok,no)=>{const t=d.transaction('f','readwrite');t.objectStore('f').put(v,k);t.oncomplete=()=>ok();t.onerror=()=>no(t.error)})}
async function ifget(k){const d=await idb();return new Promise((ok,no)=>{const r=d.transaction('f').objectStore('f').get(k);r.onsuccess=()=>ok(r.result);r.onerror=()=>no(r.error)})}
async function ifdel(k){const d=await idb();return new Promise((ok,no)=>{const t=d.transaction('f','readwrite');t.objectStore('f').delete(k);t.oncomplete=()=>ok();t.onerror=()=>no(t.error)})}
