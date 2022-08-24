let burguersArray = [
    {id: 1, name: 'Hamburguesa simple'},
    {id: 2, name: 'Hamburguesa completa'},
    {id: 3, name: 'Hamburguesa con Cheddar'},
    {id: 4, name: 'Hamburguesa vegana'}
]
const root = document.getElementById('root');

const handleRead = () => {
    root.innerHTML = '<ul id="readUl"></ul>'
    const readUl = document.getElementById('readUl')
    burguersArray.map(burguer => {
        readUl.innerHTML+=`<li>${burguer.name}</li><button class="update-btn" onclick="handleUpdate(${burguer.id})">Update (Actualizar) </button>
        <button class="delete-btn" onclick="handleDelete(${burguer.id})">Delete (Eliminar) </button>`
    })
}

const handleUpdate = (id) => {
    root.innerHTML = `
        <input type='text' id="burguerName" placeholder='Nombre...'>
        <button id="submit" onclick="handleSubmitUpdate(${id})">Submit</button>
    `

}
const handleCreate = () => {
    root.innerHTML = `
        <input type='text' id="burguerName" placeholder='Nombre...'>
        <button id="submit" onclick="handleSubmitCreate()">Submit</button>
    `
    
}
const handleSubmitCreate = () => {
    const name = document.getElementById('burguerName').value
    const newBurguer = {id: burguersArray.length + 1, name: name};
    burguersArray.push(newBurguer);
    root.innerHTML = '<p>Burga creada con exito!</p>'
}

const handleSubmitUpdate = (id) => {
    const name = document.getElementById('burguerName').value;
    burguersArray = burguersArray.filter(burguer => burguer.id !== id)
    burguersArray.push({id, name})
    root.innerHTML = '<p>Burga actualizada... Cuando comemos???</p>'
}

const handleDelete = (id) => {
        burguersArray = burguersArray.filter(burguer => burguer.id !== id)
        root.innerHTML = '<p>Burga eliminada... Preferis una pizza???</p>'
    }

