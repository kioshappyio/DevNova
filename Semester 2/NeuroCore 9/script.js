const screenshoot = document.getElementById('screenshoot');
const result = document.getElementById('result');
const activity = document.getElementById('activity');
const type = document.getElementById('type');


async function generateIde() {
  const url = "https://apis.scrimba.com/bored/api/activity";
  const response = await fetch(url);
  const api = await response.json();
  
  activity.textContent = api.activity;
  type.textContent = api.type;
  type.style.display = 'block';
  
  let count = 0;
  
  screenshoot.addEventListener("click", function() {
    count && location.reload();
    html2canvas(result).then(callback => {
      screenshoot.setAttribute("href", callback.toDataURL("image/png"));
      screenshoot.textContent = "📥";
      count = 1;
    });
  });
}