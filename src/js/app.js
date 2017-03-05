var addButton = document.getElementById('add-car'),
    saveButton = document.getElementById('save-car'),
    cancelButton = document.getElementById('cancel-car'),

    modal = document.getElementById('modal-block'),

    inputTitle =  document.getElementById('input-title'),
    inputYear =  document.getElementById('input-year'),
    inputMileage =  document.getElementById('input-mileage'),
    inputPrice =  document.getElementById('input-price'),
    inputBrand =  document.getElementById('input-brand'),

    numberReg = new RegExp('^\\d+$'),

    error = document.getElementById('error-name'),
    errorNumber = document.getElementById('error-number'),
    errorMileage = document.getElementById('error-mileage'),
    errorPrice = document.getElementById('error-price'),

    getImageId = document.getElementById("logo-brand"),
    getDamageBlock = document.getElementById("input-damage"),
    getDamage = document.getElementById("radioTrue"),
    getColor = document.getElementById("input-color"),
    damageField = document.getElementById("crash-details"),
    colorBox = document.getElementById('color-block');




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
inputBrand.onchange = function (){
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

//we going to use this  for checking if input type is number
function inputType(value) {
    if(value === "")
        return "";
    else if(value === "true" || value === "false")
        return "boolean";
    else if(!Number.isNaN(Number(value)))
        return "number";
    else
        return typeof value;
}

//set validation image for Title
inputTitle.onkeydown = function(){
    setTimeout(function() {
        if(inputTitle.value.length > 2 ) {
            inputTitle.style.background = 'url(../img/checkmark.png) no-repeat right 10px center'
        } else {
            inputTitle.style.background = 'url(../img/invalid.png) no-repeat right 10px center'
        }
    },0)
};

inputYear.onkeydown = function(){

    setTimeout(function() {
        if( inputYear.value.length === 4 && inputType(inputYear.value) === 'number') {
            inputYear.style.background = 'url(../img/checkmark.png) no-repeat right 10px center'
        } else {
            inputYear.style.background = 'url(../img/invalid.png) no-repeat right 10px center'
        }
    },0)
};

//set mileage validation image
inputMileage.onkeydown = function(){
    setTimeout(function() {
        if( inputMileage.value.length > 0 && inputType(inputMileage.value) === 'number' ) {
            inputMileage.style.background = 'url(../img/checkmark.png) no-repeat right 10px center'
        } else {
            inputMileage.style.background = 'url(../img/invalid.png) no-repeat right 10px center'
        }
    },0)
};

inputPrice.onkeydown = function(){
    setTimeout(function() {
        if( inputPrice.value.length > 0 && inputType(inputPrice.value) === 'number' ) {
            inputPrice.style.background = 'url(../img/checkmark.png) no-repeat right 10px center'
        } else {
            inputPrice.style.background = 'url(../img/invalid.png) no-repeat right 10px center'
        }
    },0)
};

// changing color 'real-time' of square
getColor.onkeydown = function () {
    setTimeout(function(){
        colorBox.style.display = 'block';
        colorBox.style.backgroundColor = getColor.value;

        //if input color is empty we hide it
        if (getColor.value.length == 0) {
            colorBox.style.display = 'none';
        }
    },0);

};

saveButton.onclick = function(){
    //checking if title has more than 3 characters to make it valid
    if (inputTitle.value.length < 3) {
        error.innerHTML = 'Title must be 3 or more characters';
    } else {
        error.innerHTML = '';
    }

    //checking if filed is number
    if (numberReg.test(inputYear.value) === false ) {
        errorNumber.innerHTML = 'This field must be a number with 4 characters';
    } else {
        errorNumber.innerHTML = '';
    }
    if (numberReg.test(inputMileage.value) === false ){
        errorMileage.innerHTML = 'This field must be a number';
    } else {
        errorMileage.innerHTML = '';
    }

    if (numberReg.test(inputPrice.value) === false && inputPrice.value.length > 0){
        errorPrice.innerHTML = 'This field must be a number';
    } else {
        errorPrice.innerHTML = '';
    }

};