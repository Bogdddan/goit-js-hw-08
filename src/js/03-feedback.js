import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

const STORAGE_KEY = "feedback-form-state";

const formData = {};

form.addEventListener('submit' , onFormSubmit);
messageTextarea.addEventListener('input' , throttle(onTextarea , 500));


form.addEventListener('input', e =>{
    formData[e.target.name] = e.target.value;
    const formDataJSON = JSON.stringify(formData);
    const parswFormData = JSON.parse(formDataJSON);

    console.log(parswFormData);
});

fillTextarea();

function onFormSubmit(event) {
    event.preventDefault();

    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function onTextarea(event) {
    const message = event.target.value;

    localStorage.setItem(STORAGE_KEY, message);
}

function fillTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);

    if(savedMessage){
        messageTextarea.value = savedMessage;
    }
};
