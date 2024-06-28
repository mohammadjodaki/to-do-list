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
        
        let checktik = document.createElement('div')
        checktik.classList.add('flex')
        checktik.appendChild(checkbox)
        checktik.appendChild(title)
        checktik.addEventListener('click' , ()=>{
            if (checkbox.checked) {
                title.style.textDecoration = 'line-through';
                description.style.textDecoration = 'line-through'

            } else {
                title.style.textDecoration = 'none';
                description.style.textDecoration = 'none'
            }
        });
        document.getElementById('titleInp').value = '';
        document.getElementById('descriptionInp').value = '';

        item.appendChild(checktik)
        item.appendChild(description);
        item.appendChild(deleteButton);

        list.appendChild(item);
        
    } else {
        alert('Please enter title and description.');
    }
});