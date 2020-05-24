let checkButton = document.getElementById('checkButton')

checkButton.onclick = function (element) {
  let color = '#3aa757'
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    console.log('TCL: changeColor.onclick -> tabs', tabs)
    chrome.tabs.executeScript(tabs[0].id, {
      code: `document.body.style.backgroundColor = "${color}"`
    })
  })
}
