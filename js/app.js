
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
        this.completeTask
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
        if (value.length >= 30) {
            alert('please write less then 30 char !')
        }else {
            this.tasks.push(new Task(value))
            this.saveToLocalStorage()
            location.reload()
        }
    }
    saveToLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
    createUpdateDeleteBTN(parent) {
        const rmBTN = document.createElement('a')
        rmBTN.classList.add('li-button', 'remove-button')
        rmBTN.innerHTML = 'X'
        const editBTN = document.createElement('a')
        editBTN.classList.add('li-button')
        editBTN.innerHTML = '<i class="lni lni-paperclip"></i>'
        parent.append(rmBTN, editBTN)
        this.removeUpdate(rmBTN)
        this.removeUpdate(editBTN)

    }
    showPastTasks() {
        const ul = document.createElement('ul')
        const pastTodos = document.getElementById('pasttodos')
        pastTodos.append(ul)
        this.tasks.reverse()
            .map((todo) => {
                const li = document.createElement('li')
                li.textContent = todo.text
                this.createUpdateDeleteBTN(li)
                ul.append(li)
            })
        if(this.tasks.length == 0){
            let test = document.createElement('h3')
                test.innerHTML = '<i class="lni lni-empty-file"></i> your todo List is empty ! you can add some thing now...'
            pastTodos.append(test)
        }
    }
    editTodo(text) {
        let indexOfSelectedTodo = this.tasks.findIndex(task => task.text === text)
        let newText = prompt('insert your change :)')
        this.tasks[indexOfSelectedTodo].text = newText

    }
    removeUpdate(BTN) {
        BTN.addEventListener('click', (() => {
            let text = BTN.parentElement.textContent.slice(0, -1)
            let indexOfSelectedTodo = this.tasks.findIndex(task => task.text === text)
            if (BTN.classList.contains('remove-button')) {
                this.tasks.splice(indexOfSelectedTodo, 1)
            } else {
                this.editTodo(text)
            }
            this.saveToLocalStorage()
            location.reload()

        }))
    }
}

new Tasks()