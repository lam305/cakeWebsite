const form = document.getElementById('form');
const ten = document.getElementById('name');
const mess = document.getElementById('mess');
const subject = document.getElementById('subject');
const mail = document.getElementById('email');
const submit = document.getElementById('submit');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validation();
});

function validation() {
    const nameValue = ten.value.trim();
    const messValue = mess.value.trim();
    const mailValue = mail.value.trim();
    const subjectValue = subject.value.trim();


    if (nameValue === "") {
        setError(ten, 'Please fill out your name.');
    } else if (nameValue.length > 100) {
        setError(ten, 'Your name should not exceed 100 characters.');
    } else {
        setSuccess(ten);
    }

    if (messValue === "") {
        setError(mess, 'Please fill out the message.');
    } else if (messValue.length > 500) {
        setError(mess, 'Message should not exceed 500 characters.');
    } else {
        setSuccess(mess);
    }

    if (subjectValue === "") {
        setError(subject, 'Please fill out the subject.');
    } else if (subjectValue.length < 50) {
        setError(subject, 'Subject should not shorter than 50 characters.');
    } else if (subjectValue.length > 250) {
        setError(subject, 'Subject should not exceed 250 characters.');
    } else {
        setSuccess(subject);
    }

    if (mailValue === "") {
        setError(mail, 'Please fill out your name.');
    } else if (mailValue.length > 100) {
        setError(mail, 'Your email should not exceed 100 characters.');
    } else {
        setSuccess(mail);
    }


}

function setError(input, message) {
    const inputt = input.parentElement;
    const small = inputt.querySelector('small');
    // thay message
    small.innerText = message;
    // thêm class
    inputt.className = 'input error';

}

function setSuccess(input) {
    const inputt = input.parentElement;
    // thêm class
    inputt.className = 'input success';

}