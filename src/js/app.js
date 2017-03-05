var addButton = document.getElementById('add-car'),
    saveButton = document.getElementById('save-car'),
    cancelButton = document.getElementById('cancel-car'),
    modal = document.getElementById('modal-block'),
    inputTitle =  document.getElementById('input-title'),
    inputYear =  document.getElementById('input-year'),
    inputMileage =  document.getElementById('input-mileage'),
    inputBrand =  document.getElementById('input-brand'),
    error = document.getElementById('error-name'),
    errorNumber = document.getElementById('error-number'),
    errorMileage = document.getElementById('error-mileage'),
    numberReg = new RegExp('^\\d+$'),

    getImageId = document.getElementById("logo-brand"),
    getDamageBlock = document.getElementById("input-damage"),
    getDamage = document.getElementById("radioTrue"),
    damageField = document.getElementById("crash-details");


addButton.onclick = function(){
    modal.style.display = 'block';
};

cancelButton.onclick = function(){
    modal.style.display = 'none';
};

//show details field if vehicle damage is checked 'Yes'
getDamageBlock.onclick = function (){
    if (getDamage.checked){
        damageField.style.display = 'flex';
    } else {
        damageField.style.display = 'none';
    }
};

// set image src by what option value is chosen
inputBrand.onclick = function (){
    switch(inputBrand.options[inputBrand.selectedIndex].value){
        case 'hyundai':
            getImageId.src = '../img/hyundai-logo.png';
            break;
        case 'ford':
            getImageId.src = '../img/ford-logo.png';
            break;
        case 'bmw':
            getImageId.src = '../img/bmw-logo.png';
            break;
        case 'mercedes':
            getImageId.src = '../img/mercedes-logo.png';
            break;
        case 'choose':
            getImageId.src = '';
            break;
        default:
            break;
    }

};

saveButton.onclick = function(){
    //checking if title has more than 3 characters which is making title valid
    if (inputTitle.value.length < 1) {
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
    }

    //checking if filed is number
    if (numberReg.test(inputYear.value) === false) {
        errorNumber.innerHTML = 'This field must be a number';
    } else {
        errorNumber.innerHTML = '';
    }
    if (numberReg.test(inputMileage.value) === false){
        errorMileage.innerHTML = 'This field must be a number';
    } else {
        errorMileage.innerHTML = '';
    }

};