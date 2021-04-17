const browserNameElem = document.querySelector('.browser-name');
let browserName = navigator.userAgent;
const searchPartXiaoMi = "XiaoMi";
const searchPartiPhone = "iPhone";
const insult = "бомжафон";
browserNameElem.textContent = browserName;
if (browserName.includes(searchPartXiaoMi)) {
   alert("У тебя... ".insult);
} else if (browserName.includes(searchPartiPhone)) { alert("Ты крут!") } else alert("Норм устройство")