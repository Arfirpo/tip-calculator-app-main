const tipButtons = document.querySelectorAll('.buttons__button');
const tipAmountOtp = document.querySelector('.results__tip-value');
const totalOtp = document.querySelector('.results__total-value');
const billInput = document.querySelector('.inputs-section__bill-input');
const peopleInput = document.querySelector('.inputs-section__people-input');
const resetButton = document.querySelector('.result-section__button');
const customInput = document.querySelector('.buttons__custom');
const billAlert = document.querySelector('#b-alert');
const peopleAlert = document.querySelector('#p-alert');

let tipPercentage = 5;

//Event Listeners
resetButton.addEventListener('click', resetCalculator);

tipButtons.forEach(button => {
    button.addEventListener('click', handleTipButtonClick);
});

//actualizando el billInput
billInput.addEventListener('input', () =>handleInput(billInput, billAlert));
//Actualizando personInput
peopleInput.addEventListener('input', () => handleInput(peopleInput, peopleAlert));
//Actualizando el custom input
customInput.addEventListener('input', () =>{
    tipPercentage = parseInt(customInput.value);
    if(!isNaN(tipPercentage)){
        calculateTip();
    }
});
customInput.addEventListener('click', ()=> removeActiveState());

//Funciones
function handleTipButtonClick(event) {
    removeActiveState();
    event.target.classList.add('buttons__button--selected');
    tipPercentage = parseInt(event.target.innerText.slice(0, -1));
    calculateTip();
}

function handleInput(inputElement, alertElement) {
    const inputValue = parseFloat(inputElement.value);
    calculateTip();
    
    if (inputValue === 0) {
        handleError(true, inputElement, alertElement, `Can't be zero`);
    }else if(isNaN(inputValue)){
        handleError(true, inputElement, alertElement, `Can't be blank`);
    } else {
        handleError(false, inputElement, alertElement);
    }
}
function calculateTip() {
    const billValue = parseFloat(billInput.value);
    const peopleValue = parseInt(peopleInput.value);

    if (!isNaN(billValue) && !isNaN(peopleValue) && peopleValue !== 0) {
        const tipAmount = (billValue * tipPercentage / 100) / peopleValue;
        const totalAmount = ((billValue * tipPercentage / 100) + billValue) / peopleValue;
        
        tipAmountOtp.innerText = `$${tipAmount.toFixed(2)}`;
        totalOtp.innerText = `$${totalAmount.toFixed(2)}`;
    }
}
function handleError(hasError, inputElement, alertElement, errorMessage = '') {
    if (hasError) {
        inputElement.style.borderColor = 'rgb(164, 68, 68)';
        alertElement.classList.add('error');
        alertElement.innerText = errorMessage;
    } else {
        inputElement.style.borderColor = 'hsl(189, 41%, 97%)';
        alertElement.classList.remove('error');
        alertElement.innerText = '';
    }
}
function resetCalculator() {
    billInput.value = '0';
    peopleInput.value = '5';
    customInput.value = '';
    billAlert.innerText = '';
    peopleAlert.innerText = '';
    calculateTip();
}
function removeActiveState() {
    tipButtons.forEach(button => {
        button.classList.remove('buttons__button--selected');
    });
}