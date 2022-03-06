this.tasks.map((todo) => {
    const li = document.createElement('li')
    li.textContent = todo.text
    this.createRemoveBTN(li)
    ul.append(li)
})


if (value.length <= 15) {
    alert('it should be to easy for you :)')
} else {
    this.tasks.push(new Task(value))
    this.saveToLocalStorage()
}