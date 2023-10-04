let bill = document.querySelector('.inputs-section__bill-input');

let billValue = parseInt(bill.value);

let people = document.querySelector('.inputs-section__people-input');

let peopleNumber = parseInt(people.value);

let tipResult = document.querySelector('.results__tip-value');
let totalResult = document.querySelector('.results__total-value');

let buttons = document.querySelectorAll('.buttons__button');



buttons.forEach(element =>{
    element.addEventListener('click', event=>{
        let tipValue = parseInt(event.target.innerText.slice(0,-1));
        tipResult.innerText = ((billValue * tipValue / 100) / peopleNumber);
        totalResult.innerText = ((billValue * tipValue) + billValue) / peopleNumber;
    });
})