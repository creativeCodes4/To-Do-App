// Definind Variables...

const list = document.querySelector('.list')
const input = document.querySelector('#toDo-input')
// const btn = document.querySelector('#delete')


// Adding an Event Listener...

input.addEventListener('keyup', (e) => {
    e.preventDefault()
    if (e.keyCode == 13){
        addToDo(input.value)
    }
})

// Adding Function...

const addToDo = (item) =>{
    // Creating a new list item...
    const newLi = document.createElement('li')

    // Creating icons div...
    const iconDiv = document.createElement('div')

    // Adding class to the icons div...
    iconDiv.classList.add('icons')

    // Creating a Delete Button...
    const delBtn = document.createElement('i')

    // Adding Fontawesome to the element...
    delBtn.classList.add('fa','fa-trash')

    // Creating a Mark Button...
    const markBtn = document.createElement('i')

    // Adding Fontawesome to the element...
    markBtn.classList.add('fa', 'fa-check-circle')
    markBtn.id = 'mark'

    // Appending buttons to the div...
    iconDiv.appendChild(markBtn)
    iconDiv.appendChild(delBtn)
    

    // Creating a Text Node...
    const textContent = document.createTextNode(item)

    // Creating ClassNames...
    newLi.classList.add('item')

    // Adding the Delete btn attribute "role = delete "...
    delBtn.id = 'delete'

    // Appending to the LI...
    newLi.appendChild(textContent)
    newLi.appendChild(iconDiv)

    // Appending to the whole List...
    list.appendChild(newLi)

    // Clearing the input fields...
    input.value = ''
}

// List Event Listener for Deleting ...
list.addEventListener('click', (e) => {
    const tElement = e.target
    const role = tElement.id
    if(role == 'delete'){
        deleteTodo(tElement)
    }
})

list.addEventListener('click', (e) => {
    const tElement = e.target
    if (tElement.id == 'mark') {
        const pElement = tElement.parentElement.parentElement
        pElement.classList.toggle('marked')
        tElement.classList.toggle('fa-circle-o')
    }
})


// Removing ToDo...

const deleteTodo = (item) => {
    const listItem = item.parentElement.parentElement
    const pList = listItem.parentElement
    listItem.classList.add('trashed')
    list.addEventListener('transitionend', (e) => {
        e.preventDefault()
        pList.removeChild(listItem)
    })
}