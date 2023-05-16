const btn = document.querySelector('.btn'),
  tip = document.querySelector('.tip'),
  total = document.querySelector('.total'),
  error = document.querySelector('.error');

//create a funtion to calculate tip

const hideError = () => {
  setTimeout(() => {
    error.style.display = 'none';
  }, 5000);
};

const calculateTip = () => {
  const bill = document.querySelector('.bill').value;
  const rate = document.querySelector('.rate').value;

  if (bill === '' || rate == '') {
    error.style.display = 'block';
    hideError();
    //Add a condition that shows an error message when an user enters a value on the bill that isNan
  } else if (isNaN(bill)) {
    error.innerHTML = 'Please enter a number';
    error.style.display = 'block';
    hideError();
  } else {
    let tipAmt = bill * rate;
    tipAmt = Math.ceil(tipAmt);
    tip.innerHTML = `Tip: $${tipAmt}`;
  }
};

btn.addEventListener('click', calculateTip);
