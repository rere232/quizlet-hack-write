setInterval(function () {
findname = document.getElementsByClassName('WriteTextAttribute')[0];
name = findname.textContent;
console.log(name);
//faire stockage variable
chrome.storage.local.set({ key: name }, function () {
    console.log('Value is set to ' + name);
});
}, 1000);

