document.getElementById('saveBtn').addEventListener('click', () => {
    let titleInput = document.getElementById('titleInp').value;
    let descriptionInput = document.getElementById('descriptionInp').value;

    if (titleInput !== '' && descriptionInput !== '') {
        let list = document.getElementById('List');
        let item = document.createElement('div');
        item.classList.add('flex', 'place-content-between' , 'font-bold' , 'text-neutral-700');

        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox'

        let title = document.createElement('p');
        title.textContent = titleInput;

        let description = document.createElement('p');
        description.textContent = descriptionInput;

        let deleteButton = document.createElement('i');
        deleteButton.className = 'fa-solid fa-trash'
        deleteButton.style.color = 'red'
        deleteButton.style.cursor = 'pointer'
        deleteButton.addEventListener('click' , ()=>{
            list.removeChild(item)
        })
        
        let check_title = document.createElement('div')
        check_title.classList.add('flex')
        check_title.appendChild(checkbox)
        check_title.appendChild(title)
        check_title.addEventListener('click' , ()=>{
            if (title.style.textDecoration === 'line-through' && description.style.textDecoration === 'line-through') {
                title.style.textDecoration = 'none';
                description.style.textDecoration = 'none'
            } else {
                title.style.textDecoration = 'line-through';
                description.style.textDecoration = 'line-through'
            }
        })
        document.getElementById('titleInp').value = '';
        document.getElementById('descriptionInp').value = '';

        item.appendChild(check_title)
        item.appendChild(description);
        item.appendChild(deleteButton);

        list.appendChild(item);
        
    } else {
        alert('Please enter title and description.');
    }
});