let list = document.querySelector('.todo-list')
let listItem = document.querySelectorAll('.todo-list-item')
let input = document.querySelector('.todo-input')
let form = document.querySelector('.todo-form')
let priority = document.querySelector('.todo-priority')
let charCounter = document.querySelector('.char-counter');
let button = document.querySelector('.todo-add')


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
	charCounter.textContent = 0
	if (priority.classList.contains('is-important')) {
		newListItem.classList.add('is-important')
	}
}
input.oninput = function () {
	charCounter.textContent = input.value.length
	if (input.value.length > 20) {
		charCounter.classList.add('warning')
		button.disabled = true
		button.classList.add('warningButton')
	} else {
		charCounter.classList.remove('warning')
		button.classList.remove('warningButton')
		button.disabled = false
	}
}

for (let element of listItem) {
	// console.log(element)
	element.onclick = function () {
		element.classList.toggle('is-important')
	}
}