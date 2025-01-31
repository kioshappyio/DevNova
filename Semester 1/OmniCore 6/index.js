const http = require('http');
const rupiah = require('rupiah-format');
const fs = require('fs');
const port = 3001;
const host = "127.0.0.1";

const server = http.createServer(function(request, response) {
  const nama = "Key";
  let uang = 50000;
  let jajan = 15000;
  let sisa = uang - jajan;
 
 
  uang = rupiah.convert(uang);
  jajan = rupiah.convert(jajan);
  sisa = rupiah.convert(sisa);
  
  fs.appendFile('sisauang.txt', sisa, () => {
    console.log('sisa uang di simpan');
  });
  
  
  const hasil = `
  <p>halo nama saya ${nama}, saya punya
  uang ${uang} dan saya membeli
  bakso ${jajan}, jadi uang saya yang
  tadinya ${uang} sekarang tinggal
  ${sisa}, hehe</p>`;
  
  
  response.end(hasil);
});


server.listen(port, host, function (){
  console.log(`server berjalan di ${host}:${port}`);
});