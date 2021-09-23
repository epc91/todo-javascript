// Date info
const dateNumber = document.getElementById('dateNumber')
const dateText = document.getElementById('dateText')
const dateMonth = document.getElementById('dateMonth')
const dateYear = document.getElementById('dateYear')

// Tasks container
const tasksContainer = document.getElementById('tasksContainer')

const setDate = () => {
  const date = new Date()
	dateNumber.textContent = date.toLocaleString('en', { day: 'numeric'})  
	dateText.textContent = date.toLocaleString('en', { weekday: 'long'})  
	dateMonth.textContent = date.toLocaleString('en', { month: 'short'})  
	dateYear.textContent = date.toLocaleString('en', { year: 'numeric'})  
}

const addNewTask = (e) => {
	e.preventDefault()
	const { value } = e.target.taskText
	if(!value) return
	const task = document.createElement('div')
	task.classList.add('task', 'roundBorder')
	task.addEventListener('click', changeTaskState)
	task.textContent = value
	tasksContainer.prepend(task)
	e.target.reset()
}

const changeTaskState = (e) => {
	e.target.classList.toggle('done')
}

const order = () => {
	const done = []
	const toDo = []
	tasksContainer.childNodes.forEach((el) => {
		el.classList.contains('done') ? done.push(el) : toDo.push(el)
	})
	return [...toDo, ...done]
}

const renderOrderedTasks = () => {
	order().forEach((el) => {
		tasksContainer.appendChild(el)
	})
}

setDate()