const browserNameElem = document.querySelector('.browser-name');
let browserName = navigator.userAgent;
browserNameElem.textContent = browserName;