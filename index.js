//synchronous
console.log('start');
console.log('processing.....');
console.log('end');
//asnchronous
console.log('start');
setTimeout(()=>console.log('processing'),3000);
console.log('end');