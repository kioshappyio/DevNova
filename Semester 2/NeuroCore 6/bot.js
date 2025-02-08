const pertanyaan = document.getElementById('pertanyaan');
const jawaban = document.getElementById('jawaban');
const loaders = document.getElementById('loaders');
const container = document.getElementsByClassName('container');


let init = 0;


const botSay = (data) => {
  return [
    "perkenalkan nama saya key bot. nama kamu siapa?",
    `halo ${data?.nama}, berapa usia kamu?`,
    `ohhh ${data?.usia}, hobi kamu apa ya?`,
    `waww sama dong aku juga hobi ${data?.hobi}, btw punya pacar gak?`,
    `ohhh ${data?.pacar}, yaudah kalo gitu, udah dulu yaa`
    ];
};

pertanyaan.innerHTML = botSay()[0];

let userData = [];

function botStart() {
  if (jawaban.value.length < 1) return alert('silahkan jawab dulu');
  init++;
  if (init === 1) {
    botDelay({ nama: jawaban.value });
  } else if (init === 2) {
    botDelay({ usia: jawaban.value });
  } else if (init === 3) {
    botDelay({ hobi: jawaban.value });
  } else if (init === 4) {
    botDelay({ pacar: jawaban.value });
  } else if (init === 5) {
    finising();
  } else {
    botEnd();
  }
}

function botDelay(jawabanUser) {
  loaders.style.display = "block";
  container[0].style.filter = "blur(8px)";
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init];
    loaders.style.display = "none";
    container[0].style.filter = "none";
}, [1000]);
userData.push(jawaban.value);
jawaban.value = "";
}

function finising() {
  pertanyaan.innerHTML = `tenks ya ${userData[0]}, udah main ke key bot, kali-kali kita ${userData[2]} bareng ya`;
  jawaban.value = "siap tanks juga";
}

function botEnd() {
  alert(`intraksi selesai terima kasih ${userData[0]}, telah berkunjung`);
  window.location.reload();
}