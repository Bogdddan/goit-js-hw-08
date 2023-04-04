import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

const STORAGE_KEY = "feedback-form-state";


messageTextarea.addEventListener('input', throttle(onMessageTextarea ,500));
emailInput.addEventListener('input', throttle(onEmailInput ,500));

const formData = {};

form.addEventListener('input', e => {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
});

const savedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (savedFormData) {
    emailInput.value = savedFormData.email || '';
    messageTextarea.value = savedFormData.message || '';
}

function onMessageTextarea() {
    const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    formData.message = messageTextarea.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onEmailInput() {
    const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    formData.email = emailInput.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
