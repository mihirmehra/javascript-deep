const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', (e) => {
    switch (e.target.id) {
      case e.target.id:
        body.style.backgroundColor = e.target.id;
        break;
      default:
        console.log('there is nothing');
        break;
    }
  });
});
