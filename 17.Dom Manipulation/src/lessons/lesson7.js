// Traversing DOM Elements

// let list = document.getElementById('list')

// let parent = list.parentElement
// console.log(parent)

// let children = list.children
// console.log(children)

// console.log(list.previousElementSibling)
// console.log(list.nextElementSibling)

// let li = document.querySelector('li')
// console.log(li.nextElementSibling)

// console.log(list.firstElementChild)
// console.log(list.lastElementChild)

// let listItem = document.getElementsByTagName('li')

// let listItems = Array.from(listItem)
// let listItems = Array.prototype.slice.apply(listItem)
// let listItems = [...listItem]

// listItems.forEach((li, ind) => {
//     let text = li.innerHTML
//     li.innerHTML = `(${ind + 1}) ${text}`
// })

let list = document.getElementById('list')

// console.log(list.innerHTML)
// console.log(list.innerText)

// list.innerHTML = `<li class="list-group-item">I have Changed</li>`
list.innerText = `<li class="list-group-item">I have Changed</li>`

console.log(list.outerHTML)