function saklar() {
  let toggle1 = document.getElementById('toggle1');
  let toggle2 = document.getElementById('toggle2');
  let toggle3 = document.getElementById('toggle3');
  let toggle4 = document.getElementById('toggle4');
  let toggle5 = document.getElementById('toggle5');
  let toggle6 = document.getElementById('toggle6');
  
  let lampu1 = document.getElementById("lampu1");
  let lampu2 = document.getElementById("lampu2");
  let lampu3 = document.getElementById("lampu3");
  let lampu4 = document.getElementById("lampu4");
  let lampu5 = document.getElementById("lampu5");
  let lampu6 = document.getElementById("lampu6");

  if (toggle1.checked) {
    lampu1.src = 'asset/images/on.gif';
  } else {
    lampu1.src = 'asset/images/off.gif';
  }

  if (toggle2.checked) {
    lampu2.src = 'asset/images/on.gif';
  } else {
    lampu2.src = 'asset/images/off.gif';
  }

  if (toggle3.checked) {
    lampu3.src = 'asset/images/on.gif';
  } else {
    lampu3.src = 'asset/images/off.gif';
  }

  if (toggle4.checked) {
    lampu4.src = 'asset/images/on.gif';
  } else {
    lampu4.src = 'asset/images/off.gif';
  }

  if (toggle5.checked) {
    lampu5.src = 'asset/images/on.gif';
  } else {
    lampu5.src = 'asset/images/off.gif';
  }

  if (toggle6.checked) {
    lampu6.src = 'asset/images/on.gif';
  } else {
    lampu6.src = 'asset/images/off.gif';
  }
}
function saklarGrup(status, ...lampuIds) {
  lampuIds.forEach(id => {
    let lampu = document.getElementById(id);
    let toggle = document.getElementById('toggle' + id.slice(-1));

    if (status === 'on') {
      lampu.src = 'asset/images/on.gif';
      toggle.checked = true;
    } else {
      lampu.src = 'asset/images/off.gif';
      toggle.checked = false;
    }
  });
}