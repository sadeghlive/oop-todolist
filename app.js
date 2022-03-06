class Task {
    constructor(text) {
        this.text = text
        this.isComplete = false
    }
}

class Tasks {
    constructor() {
        this.grid = document.querySelector('.grid')
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || []
        this.render(this.tasks)
    }
    render(chosenArray) {
        this.htmlInput(chosenArray)
    }
    htmlInput(chosenArray){
        for(let x = 0; x <=2 ; x++){
            const div = document.createElement('div')
            this.grid.append(div)
        }
        const input = document.createElement('input')
        const inputPlace = this.grid.children[1]
        input.placeholder = 'add or search task'
        const button = document.createElement('button')
              button.textContent = 'add new Task!'
        inputPlace.append(input)
        inputPlace.append(button)

    }

}











let tasks = new Tasks()