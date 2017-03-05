var addButton = document.getElementById('add-car'),
    saveButton = document.getElementById('save-car'),
    cancelButton = document.getElementById('cancel-car'),
    modal = document.getElementById('modal-block');


addButton.onclick = function(){
    modal.style.display = 'block';
};

cancelButton.onclick = function(){
    modal.style.display = 'none';
};

saveButton.onclick = function(){
    modal.style.display = 'none';
};