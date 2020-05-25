// document.body.style.backgroundColor = '#3aa757'
// let section = document.getElementById('ember52')
// let unorderedList = section.getElementsByTagName('ul')
// console.log('TCL: unorderedList', unorderedList)
// let listA = unorderedList[0].childNodes
// console.log('TCL: listA', listA)

let list = document.querySelectorAll('li.list-style-none')
console.log('TCL: list', list)

for (let i = 0; i < list.length; i++) {
  let div = list[i].firstElementChild
  let checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.name = 'name'
  checkbox.value = 'value'
  checkbox.id = `chk${div.id}`
  checkbox.style.pointerEvents = 'all'
  checkbox.style.opacity = '1'
  checkbox.style.transform = 'scale(1.5)'
  checkbox.style.margin = '0.6rem 2.2rem 0 0'
  checkbox.style.position = 'relative'
  div.appendChild(checkbox)
}
