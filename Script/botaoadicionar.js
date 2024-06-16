document.addEventListener('DOMContentLoaded', () => {
    const addMoreButton = document.getElementById('addMoreButton');
    const form = document.getElementById('assetForm');

    addMoreButton.addEventListener('click', (e) => {
        e.preventDefault();

        // Criar um contêiner para os novos campos e a lixeira
        const newFieldsContainer = document.createElement('div');
        newFieldsContainer.classList.add('new-fields-container');

        // Criar a linha fraca
        const divider = document.createElement('hr');
        divider.classList.add('hr-divider');

        // Criar o botão de deletar
        const deleteButton = document.createElement('div');
        deleteButton.classList.add('delete-button');
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.addEventListener('click', () => {
            form.removeChild(newFieldsContainer);
        });

        // Criar novo grupo de campos
        const newFormGroupEquipment = document.createElement('div');
        newFormGroupEquipment.classList.add('form-group');
        newFormGroupEquipment.innerHTML = `
            <label for="equipment">Equipments:</label>
            <select name="equipment">
                <option value="" disabled selected>Choose Equipment</option>
                <option value="laptop">Laptop</option>
                <option value="keyboard">Keyboard</option>
                <option value="mouse">Mouse</option>
                <option value="screen">Screen</option>
                <option value="headset">Headset</option>
            </select>
        `;

        const newFormGroupAsset = document.createElement('div');
        newFormGroupAsset.classList.add('form-group');
        newFormGroupAsset.innerHTML = `
            <label for="asset">Asset:</label>
            <input type="text" name="asset" placeholder="Asset">
        `;

        const newFormGroupName = document.createElement('div');
        newFormGroupName.classList.add('form-group');
        newFormGroupName.innerHTML = `
            <label for="name">Name:</label>
            <input type="text" name="name" placeholder="Name">
        `;

        const newFormGroupDepartment = document.createElement('div');
        newFormGroupDepartment.classList.add('form-group');
        newFormGroupDepartment.innerHTML = `
            <label for="department">Department:</label>
            <select name="department">
                <option value="" disabled selected>Choose Department</option>
                <option value="HR">HR</option>
                <option value="IT">IT</option>
                <option value="BIM">BIM</option>
                <option value="CAD">CAD</option>
                <option value="Customer Service">Customer Service</option>
                <option value="Sales">Sales</option>
                <option value="Online Sales">Online Sales</option>
                <option value="Finance">Finance</option>
                <option value="Executive">Executive</option>
            </select>
        `;

        const newFormGroupObservation = document.createElement('div');
        newFormGroupObservation.classList.add('form-group');
        newFormGroupObservation.innerHTML = `
            <label for="observation">Observation:</label>
            <textarea name="observation" rows="4"></textarea>
        `;

        // Adicionar os novos grupos e o botão de deletar ao contêiner
        newFieldsContainer.appendChild(divider);
        newFieldsContainer.appendChild(deleteButton);
        newFieldsContainer.appendChild(newFormGroupEquipment);
        newFieldsContainer.appendChild(newFormGroupAsset);
        newFieldsContainer.appendChild(newFormGroupName);
        newFieldsContainer.appendChild(newFormGroupDepartment);
        newFieldsContainer.appendChild(newFormGroupObservation);

        // Adicionar o contêiner ao formulário antes do botão de enviar
        form.insertBefore(newFieldsContainer, form.querySelector('.add-more-container'));
    });
});
