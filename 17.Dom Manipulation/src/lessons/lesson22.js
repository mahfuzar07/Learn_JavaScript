// CRUD Operation

// C - Create
// R - Read
// U - Update
// D - Delete

// https://bookstore.com/api/books  GET []
// https://bookstore.com/api/books  Book {} POST
// https://bookstore.com/api/books/id  GET {}
// https://bookstore.com/api/books/id UpdatedBook {}  PUT/PATCH
// https://bookstore.com/api/books/id  DELETE


// let load = document.getElementById('load')
// let postList = document.getElementById('posts')

// const URL = 'https://jsonplaceholder.typicode.com/posts'

// load.addEventListener('click', function () {
//     fetch(URL)
//         .then(response => response.json())
//         .then(posts => {
//             posts.forEach((post, index) => {
//                 let listItem = listItemGenerator(post,  index+1)
//                 postList.appendChild(listItem)
//             })
//         })
//         .catch(e => console.log(e.message))
// })

// function listItemGenerator(item, no) {
//     let li = document.createElement('li')
//     li.className = 'list-group-item'
//     li.innerHTML = `${no}. ${item.title}`

//     return li
// }

let postForm = document.getElementById('post-form')
let posts = document.getElementById('posts')
const URL = 'https://jsonplaceholder.typicode.com/posts'

postForm.addEventListener('submit', function (e) {
    e.preventDefault()

    let title = this.title.value || undefined
    let body = this.body.value || undefined

    if (title && body) {
        let postObj = {
            userId: 100,
            title,
            body
        }

        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/JSON'
            },
            body: JSON.stringify(postObj)
        })
            .then(response => response.json())
            .then(post => {
                let item = listItemGenerator(post)
                posts.appendChild(item)
                this.reset()
            })
            .catch(e => console.log(e.message))

    } else {
        alert('Please Provide Every Details')
    }

})

function listItemGenerator(item) {
    let li = document.createElement('li')
    li.className = 'list-group-item'
    li.innerHTML = `${item.id}. ${item.title} By User Id - ${item.userId}`

    return li
}

// Canvas
// SVG
// Drag and Drop
// Transitions
// Location
// Audio, Video
// Speech Recognition
// Web Socket
// Local Storage, Cookies and Browser Databases