const tdoby = document.querySelector('tbody');

const featchTasks = async () => {
    const response = await fetch('http://localhost:3000/tasks');
    const tasks = await response.json();
    return tasks
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

const createSelect = () => {
    const options = `
    <option value="pendente">Pendente</option>
    <option value="em andamento">Em andamento</option>
    <option value="concluido">Concluida</option>
    `
    const select = createElement('select', '', options)
    return select
}

const task = {
    id: 1,
    title: 'Criado o Crud',
    created_at: '00 janeiro de 2023: 00:12',
    status: 'pendente'
}

const creatRow = (task) => {
    const { id, title, status, created_at } = task;
    const tr = createElement('tr');
    const tdTitle = createElement('td', title);
    const tdCreateAt = createElement('td'.created_at);
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

    tdoby.appendChild(tr);
}

creatRow(task)