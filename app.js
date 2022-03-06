class Task{
    constructor(text){
        this.text = text
        this.isComplete = false
    }
}

class Tasks{
    constructor(){
        this.inputPlace = document.querySelector('#input')
        this.render()
    }
    render(){
        this.insertHTML()
    }
    insertHTML(){
        const input = document.createElement('input'),
              button = document.createElement('button')
        input.placeholder = 'add/search todo'
        button.textContent = 'add task to do !'
        this.inputPlace.append(input)
        this.inputPlace.append(button)
    }
}

new Tasks()