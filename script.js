
const cardNameInput = document.querySelector('#cardname');
const cardNumberInput = document.querySelector('#cardnumber');
const expDateInput = document.querySelector('#expdate');
const expDateYInput = document.querySelector('#expdateYY');
const cvcInput = document.querySelector('#cvc');

function inputInfo() {
  const cardName = cardNameInput.value;
  const cardNumber = cardNumberInput.value;
  const expDate = expDateInput.value;
  const expDateY = expDateYInput.value;
  const cvc = cvcInput.value;

  class InfoCard {
    constructor(name, number, dateM, dateY, cvc) {
      this.name = name;
      this.number = number;
      this.dateM = dateM;
      this.dateY = dateY;
      this.cvc = cvc;
      this.printInfoCard = function() {
        const printName = document.querySelector('.print-name');
        const printNumber = document.querySelector('.print-number');
        const printDate = document.querySelector('.print-date');
        const printCvc = document.querySelector('.print-cvc');
        let dateText = '';
        if (this.dateM || this.dateY) {
          dateText = `${this.dateM}/${this.dateY}`;
        }
        printName.innerHTML = `${this.name}`;
        printNumber.innerHTML = `${this.number}`;
        printDate.innerHTML = `${dateText}`;
        printCvc.innerHTML = `${this.cvc}`;
      };
    }
  }
  const card = new InfoCard(cardName, cardNumber, expDate, expDateY, cvc);
  card.printInfoCard();
}

cardNameInput.addEventListener('input', inputInfo);
cardNumberInput.addEventListener('input', function() {
  const maxLength = 20;
  if (this.value.length > maxLength) {
    this.value = this.value.slice(0, maxLength);
  }
  inputInfo();
});
expDateInput.addEventListener('input', function() {
  const maxLength = 2;
  if (this.value.length > maxLength) {
    this.value = this.value.slice(0, maxLength);
  }
  inputInfo();
});
expDateYInput.addEventListener('input', function() {
  const maxLength = 2;
  if (this.value.length > maxLength) {
    this.value = this.value.slice(0, maxLength);
  }
  inputInfo();
});
cvcInput.addEventListener('input', function() {
  const maxLength = 3;
  if (this.value.length > maxLength) {
    this.value = this.value.slice(0, maxLength);
  }
  inputInfo();
});

// input card number mask

new Cleave(cardNumberInput, {
  blocks: [4, 4, 4, 4],
  delimiters: [' ', ' ', ' ']
});

// validate form and complete state mensagem 

(() => {
  'use strict';

  const forms = document.querySelectorAll('.needs-validation');
  let isFormVisible = true; 
  Array.prototype.slice.call(forms).forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      event.stopPropagation();
      
      const cardNumberInput = form.querySelector('#cardnumber');
      const invalidCardNumberFeedback = form.querySelector('#invalid-cardnumber');

      if (cardNumberInput.value.trim() === '') {
        invalidCardNumberFeedback.textContent = "Can't be blank";
      } else if (!/^[0-9 ]{19}$/.test(cardNumberInput.value)) {
        invalidCardNumberFeedback.textContent = 'Wrong format, numbers only';
      } else {
        invalidCardNumberFeedback.textContent = '';
        if (form.checkValidity()) {
          const formContent = document.querySelector('#form-content');
          const complete = document.querySelector('.complete');
  
          if (isFormVisible) {
            formContent.style.display = 'none';
            complete.style.display = 'flex';
          } else {
            formContent.style.display = 'flex';
            complete.style.display = 'none';
          }
  
          isFormVisible = !isFormVisible;
        }
      }

      form.classList.add('was-validated');
    }, false);
  });
})();
