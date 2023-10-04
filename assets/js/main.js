let btns = document.querySelectorAll('.buttons__button');
let tipAmountOtp = document.querySelector('.results__tip-value');
let totalOtp = document.querySelector('.results__total-value');
let billInput = document.querySelector('.inputs-section__bill-input');
let peopleInput = document.querySelector('.inputs-section__people-input');
let resetButton = document.querySelector('.result-section__button');



function resetCalculator() {
    billInput.value = ''; // Restablecer el valor del monto de la factura
    peopleInput.value = ''; // Restablecer el valor de la cantidad de personas
    tipAmountOtp.textContent = '$0.00'; // Restablecer la cantidad de propina en HTML
    totalOtp.textContent = '$0.00'; // Restablecer el total en HTML
}

resetButton.addEventListener('click', resetCalculator);

btns.forEach(element => {
    element.addEventListener('click', event => {
        btns.forEach(element =>{
            element.classList.remove('buttons__button--selected');
        })
        //cambiar estilo selected
        element.classList.add('buttons__button--selected');



        // Obtener el valor actual del monto de la factura y la cantidad de personas
        let billNumber = parseFloat(billInput.value);
        let peopleNumber = parseInt(peopleInput.value);

        // Validar la entrada
        // if (isNaN(billNumber) || isNaN(peopleNumber) || billNumber <= 0 || peopleNumber <= 0) {
        //     alert('Por favor, ingresa valores válidos para el monto de la factura y la cantidad de personas.');
        //     return;
        // }

        // Obtener el porcentaje de propina del botón clickeado
        let tipPercentage = parseInt(event.target.innerText.slice(0, -1));

        // Calcular la cantidad de propina
        let tipAmount = ((tipPercentage / 100) * billNumber) / peopleNumber;

        // Calcular el total de la factura por persona
        let totalPerPerson = ((billNumber * tipPercentage / 100) + billNumber)/peopleNumber;

        // Actualizar los elementos HTML con los resultados
        tipAmountOtp.textContent = `$${tipAmount.toFixed(2)}`;
        totalOtp.textContent = `$${totalPerPerson.toFixed(2)}`;
    });
});
