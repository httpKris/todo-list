let list = document.querySelector('.todo-list')
let listItem = document.querySelector('.todo-list-item')
let input = document.querySelector('.todo-input')
let form = document.querySelector('.todo-form')
let priority = document.querySelector('.todo-priority')

list.onclick = function () {
	listItem.classList.toggle('is-important')
}

priority.onclick = function () {
	priority.classList.toggle('is-important')
	if (priority.classList.contains('is-important')) {
		priority.textContent = 'Важная задача'
	} else {
		priority.textContent = 'Обычная задача'
	}
}

form.onsubmit = function (event) {
	event.preventDefault()
	let newListItem = document.createElement('li')
	newListItem.textContent = input.value
	list.append(newListItem)
	input.value = ''
	if (priority.classList.contains('is-important')) {
		newListItem.classList.add('is-important')
	}
}