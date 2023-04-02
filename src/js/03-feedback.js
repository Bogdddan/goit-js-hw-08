import throttle from 'lodash.throttle';

// const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');
const button = document.querySelector('.buttonre');

const STORAGE_KEY = "feedback-form-state";



button.addEventListener('submit' , onFormSubmit);
messageTextarea.addEventListener(STORAGE_KEY , onTextarea);

function onFormSubmit(event) {
    event.preventDefault();

    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};


function onTextarea(event) {
    const message = event.currentTarget.value;

    localStorage.setItem(STORAGE_KEY, message);
}


fillTextarea();

function fillTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);

    if(savedMessage){
        messageTextarea.value = savedMessage;
    }
};