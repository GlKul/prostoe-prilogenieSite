const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');

let count = 0;

function incrementCounter() {
    count +=1;
    counterDisplay.textContent = count;
}

incrementBtn.addEventListener('click', incrementCounter);

function showMessage() {
  alert( 'Всем привет!' );
}

function showMessage2() {
  let message = "Привет, я JavaScript!";
  alert( message );
}
