let checkButton = document.getElementById('checkButton')

checkButton.onclick = function (element) {
  //Accesing the DOM of the tab :
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    console.log('TCL: changeColor.onclick -> tabs', tabs)
    chrome.tabs.executeScript(tabs[0].id, {
      file: 'checkbox.js'
    })
  })
}
