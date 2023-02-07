const tdoby = document.querySelector('tbody');

const addForm = document.querySelector('.add-form')

const inputTask = document.querySelector('.input-task')

const featchTasks = async () => {
    const response = await fetch('http://localhost:3000/tasks');
    const tasks = await response.json();
    return tasks
}

const addTask = async (event) => {
    event.preventDefault();

    const task = { title: inputTask.value };

    await fetch('http://localhost:3000/tasks', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
    });
    loadTasks()
}

const createElement = (tag, innerText = '', innerHTML = '') => {
    const element = document.createElement(tag);

    if (innerText) {
        element.innerText = innerText;

    }
    if (innerHTML) {
        element.innerHTML = innerHTML
    }

    return element
}

const createSelect = (value) => {
    const options = `
    <option value="pendente">Pendente</option>
    <option value="em andamento">Em andamento</option>
    <option value="concluido">Concluida</option>
    `;
    const select = createElement('select', '', options);

    select.value = value;

    return select;
}

const creatRow = (task) => {
    const { id, title, created_at, status } = task;
    const tr = createElement('tr');
    const tdTitle = createElement('td', title);
    const tdCreateAt = createElement('td', created_at);
    const tdStatus = createElement('td');
    const tActions = createElement('td');

    const select = createSelect(status);

    const ediButton = createElement('button', '', '<span class="material-symbols-outlined">Edit</span>');
    const deleteButton = createElement('button', '', '<span class="material-symbols-outlined">delete</span>');

    ediButton.classList.add('btn-action');
    deleteButton.classList.add('btn-action');

    tdStatus.appendChild(select)

    tActions.appendChild(ediButton);
    tActions.appendChild(deleteButton);



    tr.appendChild(tdTitle);
    tr.appendChild(tdCreateAt);
    tr.appendChild(tdStatus);
    tr.appendChild(tActions)

    return tr;

}

const loadTasks = async () => {
    const tasks = await featchTasks();
    tasks.forEach((task) => {
        const tr = creatRow(task);
        tdoby.appendChild(tr);
    });
}

addForm.addEventListener('submit', addTask)

loadTasks();