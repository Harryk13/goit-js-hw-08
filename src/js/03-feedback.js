import throttle from 'lodash.throttle';

const $form = document.querySelector('.feedback-form');
const $email = document.querySelector('input[name="email"]');
const $message = document.querySelector('textarea[name="message"]');

const savedData = localStorage.getItem('feedback-form-state');

function getValues () {
  return {
    email: $email.value,
    message: $message.value
  }
}

function onInput () {
  localStorage.setItem('feedback-form-state', JSON.stringify(getValues()));
}

function onSubmit ( event ){
  event.preventDefault();
  event.currentTarget.reset();

  console.log(getValues());

  $email.value = '';
  $message.value = '';
  onInput();
}

$form.addEventListener('submit', onSubmit);
$form.addEventListener('input', throttle(onInput, 500));

if ( savedData ) {
  const parsedData = JSON.parse(savedData);

  $email.value = parsedData.email;
  $message.value = parsedData.message;
}