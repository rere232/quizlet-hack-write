document.getElementById("test").addEventListener("click", myFunction);
function myFunction() {
    
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        console.log(tabs[0].url);
        console.log(tabs[0].id);
        my_tabid = tabs[0].id;
    }),

        //setInterval(function () {
        chrome.scripting.executeScript(
            {
                target: { tabId: my_tabid },
                files: ['findname.js'],
            });
//}, 1000);
    chrome.scripting.executeScript(
        {
            target: { tabId: my_tabid },
            files: ['variableonly.js'],
        }); 



    chrome.tabs.query({ currentWindow: true, active: false }, function (tabs) {
        console.log(tabs[0].url);
        console.log(tabs[0].id);
        my_tabid2 = tabs[0].id;
    }),
       // setInterval(function () { 
    chrome.scripting.executeScript(
        {
            target: { tabId: my_tabid2 },
            files: ['myscript.js'],
        });
//}, 100);
    
}

