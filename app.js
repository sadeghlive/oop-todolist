class Task {
    constructor(text) {
        this.text = text
        this.isComplete = false
    }
}

class Tasks {
    constructor() {
        this.inputPlace = document.querySelector('#input')
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || []
        this.render()
    }
    render() {
        this.insertHTML()
        this.eventListeners()
        this.showPastTasks()
    }
    insertHTML() {
        const input = document.createElement('input'),
            button = document.createElement('button')
        input.placeholder = 'add/search todo'
        button.innerHTML = '<i class="lni lni-circle-plus"></i> add task to do !'
        this.inputPlace.append(input)
        this.inputPlace.append(button)
    }
    eventListeners() {
        // don't scare ! this is just button event listener :)
        this.inputPlace.children[1].addEventListener('click', (() => {
            this.addToList(this.inputPlace.children[0].value)
        }))


    }
    addToList(value) {
        if (value.length <= 15) {
            alert('it should be to easy for you :)')
        } else {
            this.tasks.push(new Task(value))
            this.saveToLocalStorage()
        }
    }
    saveToLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
    createRemoveBTN(parent) {
        const rmBTN = document.createElement('a')
        rmBTN.className = 'li-button'
        rmBTN.innerHTML = 'X'
        const editBTN = document.createElement('a')
        editBTN.className = 'li-button'
        editBTN.innerHTML = '<i class="lni lni-paperclip"></i>'
        parent.append(rmBTN)
        parent.append(editBTN)
        this.removeFromListButton(rmBTN)
    }
    removeFromListButton(rmBTN) {
        rmBTN.addEventListener('click', ((e) => {
            let text = e.target.parentElement.textContent.slice(0,-1)
            this.tasks.forEach((todo,todoIndex)=>{
               if(todo.text === text){
                   console.log(todoIndex)
               }
            })
            
        }))
    }

    showPastTasks() {
        const ul = document.createElement('ul')
        const pastTodos = document.getElementById('pasttodos')
        pastTodos.append(ul)
        this.tasks.reverse()
        .map((todo) => {
            const li = document.createElement('li')
            li.textContent = todo.text
            this.createRemoveBTN(li)
            ul.append(li)
        })
    }
}

new Tasks()