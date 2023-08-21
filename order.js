function phoneFunction() {

    if (document.getElementById("call").checked) {

        document.getElementById("phone").style.display = "inline-block";

        document.getElementById("phone").setAttribute("required", true);
        document.getElementById("labelPhone").style.display = "inline-block";

    } else {

        document.getElementById("phone").removeAttribute("required");

        document.getElementById("phone").style.display = "none";
        document.getElementById("labelPhone").style.display = "none";

    }

}


const form = document.getElementById('form');
const select = document.getElementById('cakeName');
const ten = document.getElementById('name');
const mess = document.getElementById('mess');
const deliverDate = document.getElementById('deliverDate');
const address = document.getElementById('address');
const submit = document.getElementById('submit');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validation();
});

function validation() {
    const selectValue = select.value.trim();
    const nameValue = ten.value.trim();
    const messValue = mess.value.trim();
    const deliverDateValue = deliverDate.value.trim();
    const addressValue = address.value.trim();

    if (nameValue === "") {
        setError(ten, 'Please fill out your name.');
    } else {
        setSuccess(ten);
    }
    if (messValue.length > 30) {
        setError(mess, 'Message should not exceed 30 characters.');
    } else {
        setSuccess(mess);
    }
    if (selectValue === "notSelect") {
        setError(select, "Please select our product.");
    } else {
        setSuccess(select);
    }
    if (deliverDateValue === "") {
        setError(deliverDate, "Please fill out the deliver date.");
    } else if (ssDate() == false) {
        setError(deliverDate, "This field does not allow dates in the past.");
    } else {
        setSuccess(deliverDate);
    }

    if (addressValue.length > 500) {
        setError(address, 'Message should not exceed 500 characters.');
    } else if (addressValue === "") {
        setError(address, "Please fill out the address.");
    } else {
        setSuccess(address);
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

function ssDate() {

    var myinput = document.getElementById("deliverDate").valueAsDate;
    var todaydate = new Date();
    if (myinput < todaydate) {
        return false;
    } else {
        return true;
    }

}