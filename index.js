function addTodo() {
	let todoText = document.getElementById('todo-text');
	let todoSpace = document.getElementById('todo-space');
	todoSpace.innerHTML = `<div class="todo-item">${todoText}</div>`
}


