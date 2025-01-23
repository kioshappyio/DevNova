let panjangPassword = document.getElementById('panjangPassword');
let password = document.getElementById('password');
let saveButton = document.getElementById('saveButton');

function generatePassword(len) {
  const lowerAlfabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberic = "0123456789";
  const syimbol ="@#$_&-+()/*':;!?~={}[]";
  const data = lowerAlfabet + upperAlfabet + numberic + syimbol;
  let generator = '';
  for (let i = 0; i < len; i++) {
    generator += data[~~(Math.random() * data.length)];
  }
  return generator;
}

function getPassword() {
  const newPassword = generatePassword(panjangPassword.value);
  password.value = newPassword;
  alert('Password has been created');
}

function save() {
  document.title = password.value;
  saveButton.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(`password saya : ${document.title}`));
  saveButton.setAttribute('download', 'MyPasswordGeneratorLOG.txt');
  alert('Password successfully saved');
}