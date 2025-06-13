const form = document.querySelector('form');

function calculateBMI(weight, height) {
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  return bmi;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;
  const resultDiv = document.getElementById('results');
  const message = document.getElementById('message');

  if (height === '' || height < 0 || isNaN(height)) {
    resultDiv.innerHTML = 'please enter a valid height';
    resultDiv.style.color = 'red';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    resultDiv.innerHTML = 'please enter a valid weight';
    resultDiv.style.color = 'red';
  } else {
    const resultBmi = calculateBMI(weight, height);
    resultDiv.innerHTML = resultBmi;

    if (resultBmi <= 18.6) {
      message.innerHTML = 'you are under weight';
    } else if (resultBmi >= 18.7 && resultBmi <= 24.9) {
      message.innerHTML = 'you have normal weight';
    } else if (resultBmi >= 25) {
      message.innerHTML = 'you are over weight';
    }
  }
});
